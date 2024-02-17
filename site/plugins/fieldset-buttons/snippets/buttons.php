<?php if ($buttons->isNotEmpty()) : ?>
  <div class="buttons is-centered<?= e(isset($isVertical) && $isVertical, ' is-vertical') . (isset($classes) ? ' ' . $classes : '') ?>">
    <?php
    foreach ($buttons->toStructure() as $button) {
      $class = $button->color()->escape('attr') .
        ($button->isLight()->toBool() ? ' is-light' : '') .
        ($button->isOutlined()->toBool() ? ' is-outlined' : '') .
        (isset($buttonClasses) ? ' ' . $buttonClasses : '');

      snippet('elements/link', [
        'class' => 'button ' . $class,
        'link' => $button,
        'target' => $target ?? null
      ]);
    }
    ?>
  </div>
<?php endif ?>