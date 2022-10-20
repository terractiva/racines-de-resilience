<?php foreach ($layouts as $layout): ?>
<?php if ($layout->columns()->count() === 1): ?>
<?php foreach ($layout->columns()->first()->blocks() as $columnBlock): ?>
<?= $columnBlock ?>
<?php endforeach ?>
<?php else: ?>
<div class="layouts columns">
  <?php foreach ($layout->columns() as $column): ?>
  <div class="column is-<?= $column->span() ?>">
    <?php foreach ($column->blocks() as $columnBlock): ?>
    <?= $columnBlock ?>
    <?php endforeach ?>
  </div>
  <?php endforeach ?>
</div>
<?php endif ?>
<?php endforeach ?>
