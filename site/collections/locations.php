<?php

return function () {
  $kirby = kirby();
  $cache = $kirby->cache('airtable');
  $cacheName = 'locations';

  if ($kirby->request()->query()->get('flush-cache') !== null) $cache->remove($cacheName);

  $locations = $cache->get($cacheName);

  if ($locations === null) {
    $countries = [];
    $regionsByCountry = [];
    $departmentsByRegion = [];

    foreach (collection('actions') as $action) {
      foreach ($action->sources()->toStructure() as $source) {
        if ($source->country()->isNotEmpty()) {
          $country = $source->country()->value();

          if (!in_array($country, $countries)) {
            $countries[] = $country;
            $regionsByCountry[$country] = [];
          }

          if ($source->region()->isNotEmpty()) {
            $region = $source->region()->value();

            if (!in_array($region, $regionsByCountry[$country])) {
              $regionsByCountry[$country][] = $region;
              $departmentsByRegion[$region] = [];
            }

            if ($source->department()->isNotEmpty()) {
              $department = $source->department()->value();

              if (!in_array($department, $departmentsByRegion[$region])) {
                $departmentsByRegion[$region][] = $department;
              }
            }
          }
        }
      }
    }

    sort($countries);

    foreach ($regionsByCountry as $country => $regions) {
      sort($regionsByCountry[$country]);
    }
    foreach ($departmentsByRegion as $region => $department) {
      sort($departmentsByRegion[$region]);
    }

    $locations = [
      'countries' => $countries,
      'regionsByCountry' => $regionsByCountry,
      'departmentsByRegion' => $departmentsByRegion
    ];

    $cache->set($cacheName, $locations, 24 * 60); // 1 journée
  }

  return $locations;
};
