<?php

Kirby::plugin('racines-de-resilience/bool-to-string', [
  'fieldMethods' => [
    'boolToString' => function ($field, $trueString = '', $falseString = '', $emptyString = '') {
      if ($field->isEmpty()) return $emptyString;

      return $field->toBool() ? $trueString : $falseString;
    }
  ]
]);
