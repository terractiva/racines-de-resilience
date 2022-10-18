<?php

Kirby::plugin('racines-de-resilience/fieldset-buttons', [
  'blueprints' => [
    'blocks/buttons' => __DIR__ . '/blueprint.yml',
    'fields/buttons' => __DIR__ . '/blueprints/buttons.yml'
  ],
  'snippets' => [
    'blocks/buttons' => __DIR__ . '/snippet.php',
    'elements/buttons' => __DIR__ . '/snippets/buttons.php'
  ]
]);
