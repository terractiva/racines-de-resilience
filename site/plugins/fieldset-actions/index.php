<?php

Kirby::plugin('racines-de-resilience/fieldset-actions', [
  'blueprints' => [
    'blocks/actions' => __DIR__ . '/blueprints/actions.yml'
  ],
  'snippets' => [
    'blocks/action' => __DIR__ . '/snippets/action.php',
    'blocks/actions' => __DIR__ . '/snippets/actions.php'
  ]
]);
