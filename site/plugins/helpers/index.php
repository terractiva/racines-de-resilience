<?php

Kirby::plugin('racines-de-resilience/helpers', [
  'pageMethods' => [
    'headTitle' => function () {
      $site = site();

      if ($this->isHomePage()) return $site->title()->escape();

      return $site->breadcrumb()->not('home')->first()->title()->escape() . ' • ' . $site->title()->escape();
    }
  ],
  'fieldMethods' => [
    'toTitleId' => function ($field) {
      return Str::slug(strip_tags(str_replace('<br>', ' ', $field->value())));
    }
  ]
]);
