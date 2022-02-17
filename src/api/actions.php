<?php
/**
 * Interface entre Airtable et l'application permettant de :
 *  - convertir les données dans le format voulu
 *  - cacher la clé secrète Airtable
 */

// On construit les filtres pour la requête à Airtable
$filter = '';

if ($_GET) {
  $actionTermFilter = NULL;
  $categoriesFilter = array();
  $countriesFilter = array();
  $departmentsFilter = array();
  $levelsFilter = array();
  $regionsFilter = array();
  $sourceTermFilter = NULL;

  if ($_GET['action']) {
    $actionTermFilter = 'REGEX_MATCH({Nom}, "(?i)' . $_GET['action'] . '")';
  }
  if ($_GET['categorie']) {
    foreach ($_GET['categorie'] as $category) {
      $categoriesFilter[] = 'SEARCH("' . transformCategoryBack($category) . '", ARRAYJOIN({Catégories}))';
    }
  }
  if ($_GET['departement']) {
    foreach ($_GET['departement'] as $department) {
      $departmentsFilter[] = '{Département - ID}="' . $department . '"';
    }
  }
  if ($_GET['niveau']) {
    foreach ($_GET['niveau'] as $level) {
      $levelsFilter[] = '{Niveau}="' . transformLevelBack($level) . '"';
    }
  }
  if ($_GET['pays']) {
    foreach ($_GET['pays'] as $country) {
      $countriesFilter[] = '{Pays - ID}="' . $country . '"';
    }
  }
  if ($_GET['region']) {
    foreach ($_GET['region'] as $region) {
      $regionsFilter[] = '{Région - ID}="' . $region . '"';
    }
  }
  if ($_GET['structure']) {
    $sourceTermFilter = 'REGEX_MATCH({Source - Nom}, "(?i)' . $_GET['structure'] . '")';
  }
  if ($_GET['thematique']) {
    foreach ($_GET['thematique'] as $subcategory) {
      $categoriesFilter[] = '{Thématique - ID}="' . $subcategory . '"';
    }
  }

  $filters = array();

  if ($actionTermFilter) {
    $filters[] = urlencode($actionTermFilter);
  }
  if (count($categoriesFilter)) {
    $filters[] = 'OR(' . urlencode(implode(',', $categoriesFilter)) . ')';
  }
  if (count($countriesFilter)) {
    $filters[] = 'OR(' . urlencode(implode(',', $countriesFilter)) . ')';
  }
  if (count($departmentsFilter)) {
    $filters[] = 'OR(' . urlencode(implode(',', $departmentsFilter)) . ')';
  }
  if (count($levelsFilter)) {
    $filters[] = 'OR(' . urlencode(implode(',', $levelsFilter)) . ')';
  }
  if (count($regionsFilter)) {
    $filters[] = 'OR(' . urlencode(implode(',', $regionsFilter)) . ')';
  }
  if ($sourceTermFilter) {
    $filters[] = urlencode($sourceTermFilter);
  }

  if (count($filters)) {
    $filter = 'AND(' . implode(',', $filters) . ')';
  }
}

// On récupère les données Airtable
$request = curl_init();
curl_setopt($request, CURLOPT_HTTPGET, 1);
curl_setopt($request, CURLOPT_RETURNTRANSFER, true);
curl_setopt($request, CURLOPT_TIMEOUT, 10);
curl_setopt($request, CURLOPT_HTTPHEADER, array('Authorization: Bearer #{KEY}#'));
curl_setopt($request, CURLOPT_URL, 'https://api.airtable.com/v0/#{BASE}#/#{TABLE}#?view=#{VIEW}#&filterByFormula=' . $filter);
$data = json_decode(curl_exec($request), TRUE);
curl_close($request);

// On définit le header de la réponse
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header('Access-Control-Max-Age: 86400');
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// On retourne les données transformées ou une erreur
if (isset($data['error'])) {
  header('HTTP/1.1 400 Bad Request');
  echo json_encode($data['error']);
} else {
  $response = array_map('transformAction', $data['records']);

  header('HTTP/1.1 200 OK');
  echo json_encode($response);
}

// =================================================================================================
// Airtable vers application
// =================================================================================================
function transformAction($action) {
  $fields = $action['fields'];
  $result = new stdClass;
  $subcategory = new stdClass;
  $subcategory->name = $fields['Thématique - Nom'][0];
  $sources = array();

  if ($fields['Source - Nom']) {
    $source = new stdClass;
    $source->name = $fields['Source - Nom'];

    if ($fields['Source - Lien']) {
      $source->link = $fields['Source - Lien'];
    }

    $sources[] = $source;
  }

  $result->id = $fields['ID'];
  $result->text = $fields['Nom'];
  $result->level = transformLevel($fields['Niveau']);
  $result->categories = array_map('transformCategory', $fields['Catégories']);
  $result->subcategory = $subcategory;
  $result->sources = $sources;

  return $result;
}

function transformCategory($category) {
  switch ($category) {
    case 'Construire':
      return 'construire';
    case 'Régénérer':
      return 'regenerer';
    case 'S\'interposer':
      return 'interposer';
  }
}

function transformLevel($level) {
  switch ($level) {
    case 'Premier pas':
      return 1;
    case 'Bon intermédiaire':
      return 2;
    case 'Grand saut':
      return 3;
  }
}

// =================================================================================================
// Application vers Airtable
// =================================================================================================
function transformCategoryBack($category) {
  switch ($category) {
    case 'construire':
      return 'Construire';
    case 'regenerer':
      return 'Régénérer';
    case 'interposer':
      return 'S\'interposer';
  }
}

function transformLevelBack($level) {
  switch ($level) {
    case 1:
      return 'Premier pas';
    case 2:
      return 'Bon intermédiaire';
    case 3:
      return 'Grand saut';
  }
}
