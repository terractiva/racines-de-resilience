<?php if ($buttons->isNotEmpty()): ?>
<div class="buttons is-centered">
  <?php foreach ($buttons->toStructure() as $button): ?>
    <?php
    $class = $button->color()->escape('attr') .
    ($button->isLight()->toBool() ? ' is-light' : '') .
    ($button->isOutlined()->toBool() ? ' is-outlined' : '');
    $url = $button->type() == 'page' ? $button->page()->toPage()->url() : $button->url()->escape('attr');
    ?>
  <a class="button <?= $class ?>" href="<?= $url ?>">
    <?= $button->label()->escape() ?>
  </a>
  <?php endforeach ?>
</div>
<?php endif ?>
