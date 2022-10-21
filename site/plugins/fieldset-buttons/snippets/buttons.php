<?php $isVertical = isset($isVertical) ? $isVertical : false; ?>

<?php if ($buttons->isNotEmpty()): ?>
<div class="buttons is-centered<?= e($isVertical, ' is-vertical') ?>">
  <?php
    foreach ($buttons->toStructure() as $button) {
      $class = $button->color()->escape('attr') .
        ($button->isLight()->toBool() ? ' is-light' : '') .
        ($button->isOutlined()->toBool() ? ' is-outlined' : '');

      snippet('elements/link', [
        'class' => 'button ' . $class,
        'link' => $button
      ]);
    }
  ?>
</div>
<?php endif ?>
