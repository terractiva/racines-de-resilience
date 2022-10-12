<?php if (!$page->isErrorPage()): ?>
<?php $pageTranslations = $page->translations()->filterBy('exists', true)->flip() ?>
<?php if (count($pageTranslations) > 1): ?>
<div class="navbar-item navbar-lang">
  <?php foreach ($languages = $pageTranslations->toArray() as $language): ?>
  <a
    <?php e($kirby->language()->code() === $language['code'], 'class="is-active"') ?>
    href="<?= $page->url($language['code']) ?>"
  >
    <?= Str::upper($language['code']) ?>
  </a>

  <?php if (end($languages) !== $language): ?>
  <span> / </span>
  <?php endif ?>
  <?php endforeach ?>
</div>
<?php endif ?>
<?php endif ?>
