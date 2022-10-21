<?php

Kirby::plugin('racines-de-resilience/fieldset-soundcloud', [
  'blueprints' => [
    'blocks/soundcloud' => __DIR__ . '/blueprint.yml'
  ],
  'snippets' => [
    'blocks/soundcloud' => __DIR__ . '/snippet.php'
  ]
]);
