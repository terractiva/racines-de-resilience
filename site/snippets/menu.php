<nav class="menu">
  <?php foreach($kirby->languages() as $language): ?>
  <a
    <?php e($kirby->language() === $language, 'aria-current') ?>
    href="<?php e($page->translation($language->code())->exists(), $page->url($language->code()), page('error')->url($language->code())) ?>"
  >
    <?= html($language->name()) ?>
  </a>
  <?php endforeach ?>

  <?php foreach ($items as $item): ?>
  <a <?php e($item->isOpen(), 'aria-current ') ?> href="<?= $item->url() ?>"><?= $item->title()->escape() ?></a>
  <?php endforeach ?>
  <?php snippet('social') ?>
</nav>
