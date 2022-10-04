<?php

Kirby::plugin('proof-of-concept/partners', [
  'blueprints' => [
    'blocks/partners' => __DIR__ . '/blueprints/blocks/partners.yml'
  ],
  'snippets' => [
    'blocks/partners' => __DIR__ . '/snippets/blocks/partners.php'
  ]
]);
