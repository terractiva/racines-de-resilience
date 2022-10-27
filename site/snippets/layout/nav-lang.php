<?php $languages = $site->translations()->flip()->pluck('code'); ?>
<p class="navbar-lang">
  <?php foreach ($languages as $code): ?>
  <a
    <?php e($code === $kirby->language()->code(), 'class="is-active"') ?>
    href="<?= $page->translation($code)->exists() ? $page->url($code) : $site->url($code) ?>"
  ><?= Str::upper($code) ?></a>
  <?php e($code !== end($languages), '/') ?>
  <?php endforeach ?>
</p>
