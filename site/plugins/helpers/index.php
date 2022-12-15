<?php

function computeSourceName($source) {
  $name = $source->name()->escape();

  if ($source->department()->isNotEmpty()) $name .= ' (' . $source->department()->escape() . ')';
  else if ($source->region()->isNotEmpty()) $name .= ' (' . $source->region()->escape() . ')';
  else if ($source->country()->isNotEmpty()) $name .= ' (' . $source->country()->escape() . ')';

  return $name;
}

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
