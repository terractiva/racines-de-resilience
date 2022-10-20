<?php $isVertical = isset($isVertical) ? $isVertical : false; ?>

<?php if ($buttons->isNotEmpty()): ?>
<div class="buttons is-centered<?= e($isVertical, ' is-vertical') ?>">
  <?php foreach ($buttons->toStructure() as $button): ?>
  <?php
    $class = $button->color()->escape('attr') .
      ($button->isLight()->toBool() ? ' is-light' : '') .
      ($button->isOutlined()->toBool() ? ' is-outlined' : '');
    $url = null;

    switch ($button->type()) {
      case 'page':
        $anchor = $button->pageAnchor()->isNotEmpty() ? '#' . $button->pageAnchor()->escape('url') : '';
        $url = $button->page()->toPage()->url() . $anchor;
        break;
      case 'url':
        $url = $button->url()->escape('attr');
        break;
      case 'email':
        $subject = $button->emailSubject()->isNotEmpty() ? '?subject=' . $button->emailSubject()->escape('url') : '';
        $url = 'mailto:' . Str::encode($button->email()->escape()) . $subject;
        break;
    }
  ?>
  <a class="button <?= $class ?>" href="<?= $url ?>">
    <?= $button->label()->escape() ?>
  </a>
  <?php endforeach ?>
</div>
<?php endif ?>
