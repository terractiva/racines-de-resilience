<?php

Kirby::plugin('racines-de-resilience/fieldset-news', [
  'blueprints' => [
    'blocks/news' => __DIR__ . '/blueprints/news.yml'
  ],
  'snippets' => [
    'blocks/news' => __DIR__ . '/snippets/news.php'
  ]
]);
