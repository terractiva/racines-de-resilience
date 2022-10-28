<?php

class ActionPage extends Page
{
  public function classes()
  {
    $classes = '';

    foreach ($this->categories()->split() as $category) {
      if ($category == 'build') $classes .= ' is-build';
      if ($category == 'regenerate') $classes .= ' is-regenerate';
      if ($category == 'intervene') $classes .= ' is-intervene';
    }

    return $classes;
  }
}
