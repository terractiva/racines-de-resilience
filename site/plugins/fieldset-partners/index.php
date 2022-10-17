<?php

Kirby::plugin('racines-de-resilience/fieldset-partners', [
  'blueprints' => [
    'blocks/partners' => __DIR__ . '/blueprints/partners.yml'
  ],
  'snippets' => [
    'blocks/partners' => __DIR__ . '/snippets/partners.php'
  ]
]);
