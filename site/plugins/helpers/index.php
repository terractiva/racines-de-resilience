<?php

Kirby::plugin('racines-de-resilience/helpers', [
  'fieldMethods' => [
    'boolToString' => function ($field, $trueString = '', $falseString = '', $emptyString = '') {
      if ($field->isEmpty()) return $emptyString;

      return $field->toBool() ? $trueString : $falseString;
    }
  ],
  'pageMethods' => [
    'headTitle' => function () {
      $site = site();

      if ($this->isHomePage()) return $site->title()->escape();

      return $site->breadcrumb()->not('home')->first()->title()->escape() . ' • ' . $site->title()->escape();
    }
  ]
]);
