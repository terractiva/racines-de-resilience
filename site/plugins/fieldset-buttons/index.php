<?php

Kirby::plugin('racines-de-resilience/fieldset-buttons', [
  'blueprints' => [
    'blocks/buttons' => __DIR__ . '/blueprint.yml',
    'fields/link' => __DIR__ . '/blueprints/link.yml',
    'fields/links' => __DIR__ . '/blueprints/links.yml',
    'fields/buttons' => __DIR__ . '/blueprints/buttons.yml'
  ],
  'snippets' => [
    'blocks/buttons' => __DIR__ . '/snippet.php',
    'elements/link' => __DIR__ . '/snippets/link.php',
    'elements/buttons' => __DIR__ . '/snippets/buttons.php'
  ]
]);
