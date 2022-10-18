<?php

Kirby::plugin('racines-de-resilience/fieldset-news', [
  'blueprints' => [
    'blocks/news' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/news' => __DIR__ . '/snippet.php'
  ]
]);
