<?php $languages = $site->translations()->flip()->toArray(); ?>
<p class="navbar-lang">
  <?php foreach ($languages as $language): ?>
  <?php $code = $language['code']; ?>
  <a
    <?php e($code === $kirby->language()->code(), 'class="is-active"') ?>
    href="<?= $page->translation($code)->exists() ? $page->url($code) : $site->url($code) ?>"
  ><?= Str::upper($code) ?></a>
  <?php e($language !== end($languages), '/') ?>
  <?php endforeach ?>
</p>
