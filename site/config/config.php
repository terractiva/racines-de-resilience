<?php

require_once __DIR__ . '/../plugins/kirby3-dotenv/global.php';

loadenv(['dir' => realpath(__DIR__ . '/../../')]);

return [
  'cache.airtable' => true,
  'debug' => true,
  'environment' => 'dev',
  'languages' => true,
  'languages.detect' => true,
  'panel' => [
    'css' => 'assets/css/panel/styles.css',
    'favicon' => 'assets/images/favicon.ico'
  ],
  'sylvainjule.matomo.active' => false,
  'sylvainjule.matomo.disableCookies' => true,
  'sylvainjule.matomo.token' => env('MATOMO_TOKEN'),
  'sylvainjule.matomo.url' => 'https://statistiques.racinesderesilience.org',
  'urls' => [
    'en' => 'https://www.roots-of-resilience.development',
    'fr' => 'https://www.racinesderesilience.development'
  ]
];
