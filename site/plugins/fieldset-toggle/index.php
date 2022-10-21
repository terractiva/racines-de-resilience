<?php

Kirby::plugin('racines-de-resilience/fieldset-toggle', [
  'blueprints' => [
    'blocks/toggle' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/toggle' => __DIR__ . '/snippet.php'
  ]
]);
