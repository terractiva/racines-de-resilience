<?php

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

function findSubcategory($id) {
  $subcategory = collection('subcategories')->groupBy('num')->get($id);

  return $subcategory ? $subcategory->first()->title()->toString() : null;
}

class ActionsPage extends Page
{
  public function actions()
  {
    $kirby = kirby();
    $cache = $kirby->cache('airtable');
    $cacheName = 'actions-' . $this->airtableView();
    if ($kirby->request()->query()->get('flush-cache') !== null) $cache->remove($cacheName);
    $actions = $cache->get($cacheName);

    if ($actions === null) {
      $actions = [];
      $records = fetchActions($this->airtableBase(), $this->airtableTable(), $this->airtableView());

      foreach ($records as $record) {
        $pageIndex = array_search($record['fields']['Name'], array_column($actions, 'name'));

        if ($pageIndex === false) {
          $name = $record['fields']['Name'] ?? '';
          $actions[] = [
            'model' => 'action',
            'name' => $name,
            'slug' => Str::slug($name),
            'content' => [
              'categories' => $record['fields']['Category - ID'][0] ?? '',
              'level' => $record['fields']['Level - ID'][0] ?? null,
              'sources' => [],
              'subcategory' => findSubcategory($record['fields']['Theme - ID'][0] ?? null),
              'title' => $name
            ]
          ];
          $pageIndex = count($actions) - 1;
        }

        $actions[$pageIndex]['content']['sources'][] = [
          'name' => $record['fields']['Source - Name'] ?? '',
          'link' => $record['fields']['Source - Link'] ?? null
        ];
      }

      $cache->set($cacheName, $actions, 24 * 60); // 1 journée
    }

    return $actions;
  }

  public function children()
  {
    $pages = $this->actions();

    foreach (collection('trees') as $tree) $pages = array_merge($pages, $tree->actions());

    return Pages::factory($pages, $this);
  }
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
            $name = $record['fields']['Name'] ?? '';
            $position = $positions[$positionIndex];
            $actions[] = [
              'id' => $position->id,
              'model' => 'action',
              'slug' => Str::slug($name),
              'content' => [
                'categories' => $position->categories,
                'level' => $position->level,
                'position' => $position->position,
                'radius' => $position->radius,
                'sources' => [],
                'subcategory' => findSubcategory($position->subcategory),
                'title' => $name
              ]
            ];
            $actionIndex = count($actions) - 1;
          }
        }

        if ($actionIndex !== false) {
          $actions[$actionIndex]['content']['sources'][] = [
            'name' => $record['fields']['Source - Name'] ?? '',
            'link' => $record['fields']['Source - Link'] ?? null
          ];
        }
      }

      $cache->set($cacheName, $actions, 24 * 60); // 1 journée
    };

    return $actions;
  }

  public function children()
  {
    return Pages::factory($this->actions(), $this);
  }
}

Kirby::plugin('racines-de-resilience/airtable-actions', [
  'pageModels' => [
    'actions' => 'ActionsPage',
    'tree' => 'TreePage'
  ]
]);
