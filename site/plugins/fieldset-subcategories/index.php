<?php

Kirby::plugin('racines-de-resilience/fieldset-subcategories', [
  'blueprints' => [
    'blocks/subcategories' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/subcategories' => __DIR__ . '/snippet.php'
  ]
]);
