<?php

Kirby::plugin('racines-de-resilience/fieldset-section', [
  'blueprints' => [
    'blocks/section' => __DIR__ . '/blueprints/section.yml'
  ],
  'snippets' => [
    'blocks/section' => __DIR__ . '/snippets/section.php'
  ]
]);
