<?php

Kirby::plugin('racines-de-resilience/fieldset-partners', [
  'blueprints' => [
    'blocks/partners' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/partners' => __DIR__ . '/snippet.php'
  ]
]);
