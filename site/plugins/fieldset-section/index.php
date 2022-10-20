<?php

Kirby::plugin('racines-de-resilience/fieldset-section', [
  'blueprints' => [
    'blocks/section' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/section' => __DIR__ . '/snippet.php',
    'layout/layouts' => __DIR__ . '/snippets/layouts.php'
  ]
]);
