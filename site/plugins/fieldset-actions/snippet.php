<?php
  $actions = site()->children()->findBy('template', 'actions')->children();
  $selection = $actions;

  if ($block->isSelection()->toBool()) {
    $selection = $actions->filterBy('level', 0)->random(2, true);

    $selection->add($actions->filterBy('level', 1)->random(2, true));
    $selection->add($actions->filterBy('level', 2)->random(2, true));
    $selection->add($actions->filterBy('level', 3)->random(2, true));
  }
?>

<div class="columns is-centered is-multiline">
  <?php foreach ($selection as $action): ?>
  <div class="column is-half-tablet is-two-fifths-desktop">
    <?php snippet('elements/action', ['action' => $action]) ?>
  </div>
  <?php endforeach ?>
</div>
