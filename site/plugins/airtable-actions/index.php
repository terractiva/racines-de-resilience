<?php

function actionsToPages($cacheName, $actions) {
  $kirby = kirby();
  $cache = $kirby->cache('airtable');

  if ($kirby->request()->query()->get('flush-cache') !== null) $cache->remove($cacheName);

  $pages = $cache->get($cacheName);

  if ($pages === null) {
    $pages = [];

    foreach ($actions as $action) {
      $name = $action['name'];
      $pageIndex = array_search($name, array_column($pages, 'name'));

      if ($pageIndex === false) {
        $pages[] = [
          'model' => 'action',
          'name' => $name,
          'slug' => Str::slug($name),
          'content' => [
            'categories' => $action['categories'],
            'level' => $action['level'],
            'position' => $action['position'] ?? null,
            'positionId' => $action['positionId'] ?? null,
            'radius' => $action['radius'] ?? null,
            'sources' => [],
            'subcategory' => findSubcategory($action['subcategoryId']),
            'title' => $name
          ]
        ];
        $pageIndex = count($pages) - 1;
      }
      if ($action['source']['name']) $pages[$pageIndex]['content']['sources'][] = $action['source'];
    }

    $cache->set($cacheName, $pages, 24 * 60); // 1 journée
  }

  return $pages;
}

function fetchRecords($cacheName, $base, $table, $view) {
  $kirby = kirby();
  $cache = $kirby->cache('airtable');

  if ($kirby->request()->query()->get('flush-cache') !== null) $cache->remove($cacheName);

  $records = $cache->get($cacheName);

  if ($records === null) {
    $records = fetchRecordsRecursive($base, $table, $view);

    $cache->set($cacheName, $records, 24 * 60); // 1 journée
  }

  return $records;
}
function fetchRecordsRecursive($base, $table, $view, $offset = null) {
  $response = Remote::get(
    'https://api.airtable.com/v0/' . $base . '/' . $table . '?view=' . $view . ($offset === null ? '' : '&offset=' . $offset),
    ['headers' => ['Authorization: Bearer ' . env('AIRTABLE_KEY')]]
  );

  if ($response->code() === 200) {
    $responseJson = $response->json();

    return isset($responseJson['offset'])
      ? array_merge($responseJson['records'], fetchRecordsRecursive($base, $table, $view, $responseJson['offset']))
      : $responseJson['records'];
  }

  return [];
}

function findSubcategory($id) {
  $subcategory = collection('subcategories')->groupBy('num')->get($id);

  return $subcategory ? $subcategory->first()->uuid()->toString() : null;
}

class ActionsPage extends Page
{
  public function actions()
  {
    $actions = [];
    $records = fetchRecords(
      'actions-' . $this->airtableView(),
      $this->airtableBase(),
      $this->airtableTable(),
      $this->airtableView()
    );

    foreach ($records as $record) {
      $categories = $record['fields']['Categories - ID'] ?? [];
      $actions[] = [
        'categories' => join(', ', $categories),
        'level' => $record['fields']['Level - ID'][0] ?? null,
        'name' => $record['fields']['Name'] ?? '',
        'source' => [
          'name' => $record['fields']['Source - Name'] ?? '',
          'link' => $record['fields']['Source - Link'] ?? null
        ],
        'subcategoryId' => $record['fields']['Theme - ID'][0] ?? ''
      ];
    }

    return $actions;
  }

  public function children()
  {
    $actions = $this->actions();

    foreach (collection('trees') as $tree) $actions = array_merge($actions, $tree->actions());

    $pages = actionsToPages('pages', $actions);

    return Pages::factory($pages, $this);
  }
}

class TreePage extends Page
{
  public function actions()
  {
    $actions = [];
    $records = fetchRecords(
      'tree-actions-' . $this->airtableView(),
      $this->airtableBase(),
      $this->airtableTable(),
      $this->airtableView()
    );
    $positions = json_decode(file_get_contents(__DIR__ . '/positions.json'));
    $positionIds = array_column($positions, 'id');

    foreach ($records as $record) {
      $positionIndex = array_search($record['fields']['ID'] ?? null, $positionIds);

      if ($positionIndex !== false) {
        $position = $positions[$positionIndex];
        $actions[] = [
          'categories' => $position->categories,
          'level' => $position->level,
          'name' => $record['fields']['Name'] ?? '',
          'position' => $position->position,
          'positionId' => $position->id,
          'radius' => $position->radius,
          'source' => [
            'name' => $record['fields']['Source - Name'] ?? '',
            'link' => $record['fields']['Source - Link'] ?? null
          ],
          'subcategoryId' => $position->subcategory
        ];
      }
    }

    return $actions;
  }

  public function children()
  {
    $pages = actionsToPages('tree-pages-' . $this->slug(), $this->actions());

    return Pages::factory($pages, $this);
  }
}

Kirby::plugin('racines-de-resilience/airtable-actions', [
  'pageModels' => [
    'actions' => 'ActionsPage',
    'tree' => 'TreePage'
  ]
]);
