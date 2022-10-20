<?php

Kirby::plugin('racines-de-resilience/fieldset-box', [
  'blueprints' => [
    'blocks/box' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/box' => __DIR__ . '/snippet.php'
  ]
]);
