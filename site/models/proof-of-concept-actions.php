<?php

class ProofOfConceptActionsPage extends Page
{
  public function children()
  {
    $KEY = '';
    $BASE = '';
    $TABLE = '';
    $VIEW = '';

    $kirby = kirby();
    $cache = $kirby->cache('airtable');
    $pages  = $cache->get('pages');

    if ($pages === null) {
      $pages   = [];
      $results = [];
      $request = Remote::get(
        'https://api.airtable.com/v0/' . $BASE . '/' . $TABLE . '?view=' . $VIEW,
        ['headers' => ['Authorization: Bearer ' . $KEY]]
      );

      if ($request->code() === 200) $results = $request->json(false)->records;

      foreach ($results as $index => $action) {
        $pages[] = [
          'slug'     => Str::slug($action->fields->Nom),
          'num'      => $index + 1,
          'template' => 'action',
          'model'    => 'action',
          'content'  => [
            'title'    => $action->fields->Nom
          ]
        ];
      }

      $cache->set('pages', $pages, 60);
    }

    return Pages::factory($pages, $this);
  }
}
