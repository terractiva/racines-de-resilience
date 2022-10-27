<?php

function sumCategoryClass($result, $category) {
  if ($category == '1') return $result . ' is-build';
  if ($category == '2') return $result . ' is-regenerate';
  if ($category == '3') return $result . ' is-intervene';
}
function computeActionClasses($action) {
  return array_reduce($action['categories'], 'sumCategoryClass', '');
}

function fetchActions($base, $table, $view, $offset = null) {
  $response = Remote::get(
    'https://api.airtable.com/v0/' . $base . '/' . $table . '?view=' . $view . ($offset === null ? '' : '&offset=' . $offset),
    ['headers' => ['Authorization: Bearer ' . env('AIRTABLE_KEY')]]
  );

  if ($response->code() === 200) {
    $responseJson = $response->json();

    return isset($responseJson['offset'])
      ? array_merge($responseJson['records'], fetchActions($base, $table, $view, $responseJson['offset']))
      : $responseJson['records'];
  }

  return [];
}

class TreePage extends Page
{
  public function actions()
  {
    $kirby = kirby();
    $cache = $kirby->cache('airtable');
    $cacheName = 'tree-actions-' . $this->airtableView();
    if ($kirby->request()->query()->get('flush-cache') !== null) $cache->remove($cacheName);
    $actions = $cache->get($cacheName);

    if ($actions === null) {
      $actions = [];
      $records = fetchActions($this->airtableBase(), $this->airtableTable(), $this->airtableView());
      $positions = json_decode(file_get_contents('site/plugins/airtable-actions/positions.json'));
      $positionIds = array_column($positions, 'id');

      foreach ($records as $record) {
        $existingActionIndex = array_search($record['fields']['ID'], array_column($actions, 'id'));
        $actionIndex = $existingActionIndex;

        if ($existingActionIndex === false) {
          $positionIndex = array_search($record['fields']['ID'], $positionIds);

          if ($positionIndex !== false) {
            $position = $positions[$positionIndex];
            $actions[] = [
              'categories' => $position->categories,
              'id' => $position->id,
              'level' => $position->level,
              'name' => $record['fields']['Name'],
              'position' => $position->position,
              'radius' => $position->radius,
              'sources' => [],
              'subcategory' => $position->subcategory
            ];
            $actionIndex = count($actions) - 1;
          }
        }

        if ($actionIndex !== false && isset($record['fields']['Source - Name'])) {
          $actions[$actionIndex]['sources'][] = [
            'country' => $record['fields']['Source - Country ID'] ?? null,
            'department' => $record['fields']['Source - Department ID'] ?? null,
            'link' => $record['fields']['Source - Link'] ?? null,
            'region' => $record['fields']['Source - Region ID'] ?? null,
            'name' => $record['fields']['Source - Name']
          ];
        }
      }

      $cache->set($cacheName, $actions, 24 * 60); // 1 journée
    };

    return $actions;
  }
}

Kirby::plugin('racines-de-resilience/airtable-actions', [
  'pageModels' => [
    'tree' => 'TreePage'
  ]
]);
