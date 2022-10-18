<?php

Kirby::plugin('racines-de-resilience/fieldset-actions', [
  'blueprints' => [
    'blocks/actions' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/actions' => __DIR__ . '/snippet.php',
    'elements/action' => __DIR__ . '/snippets/action.php'
  ]
]);
