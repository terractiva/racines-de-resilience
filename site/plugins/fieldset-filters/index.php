<?php

Kirby::plugin('racines-de-resilience/fieldset-filters', [
  'blueprints' => [
    'blocks/filters' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/filters' => __DIR__ . '/snippet.php'
  ]
]);
