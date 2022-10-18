<?php
  $class = '';
  $category = $action['categories'][0];

  if ($category == 'build') $class = 'is-build';
  if ($category == 'regenerate') $class = 'is-regenerate';
  if ($category == 'intervene') $class = 'is-intervene';

  $class = esc($class, 'attr');
?>

<article class="action <?= $class ?>">
  <header class="title is-6">
    <p><?= str_repeat('∎', $action['level']) ?></p>
    <p><?= esc($action['name']) ?></p>
  </header>

  <p>
    <?php foreach ($sources = $action['sources'] as $source): ?>
    <?php e($hasUrl = $source['url'], '<a class="' . $class . '" href="' . esc($source['url'] ?? '', 'attr') . '">'); ?>
    <?= $source['name'] ?><?php e($hasUrl, '</a>'); ?><?php e($source !== end($sources), ',') ?>
    <?php endforeach ?>
  </p>

  <p>
    <span class="tag <?= $class ?> is-light is-medium">
      <?= esc($action['subcategory']) ?>
    </span>
  </p>
</article>
