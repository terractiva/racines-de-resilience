<?php
  $class = '';
  $category = $action['categories'][0];

  if ($category == 'build') $class = 'is-build';
  if ($category == 'regenerate') $class = 'is-regenerate';
  if ($category == 'intervene') $class = 'is-intervene';

  $class = esc($class, 'attr');
?>

<div class="action <?= $class ?>">
  <div class="action-name title is-6">
    <p class="action-level">
      <?= str_repeat('∎', $action['level']) ?>
    </p>
    <p>
      <?= esc($action['name']) ?>
    </p>
  </div>

  <p class="action-sources">
    <?php foreach ($sources = $action['sources'] as $source): ?>
    <?php e($hasUrl = $source['url'], '<a class="' . $class . '" href="' . esc($source['url'] ?? '', 'attr') . '">'); ?>
    <?= esc($source['name']) ?><?php e($hasUrl, '</a>') . e($source !== end($sources), ','); ?>
    <?php endforeach ?>
  </p>

  <p class="action-subcategory">
    <?= esc($action['subcategory']) ?>
  </p>
</div>
