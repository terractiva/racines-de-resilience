<div class="box<?= e($block->color()->isNotEmpty(), ' ' . $block->color()) ?>">
  <?php if ($block->heading()->isNotEmpty()): ?>
  <h3 class="title is-4" id="<?= $block->heading()->toTitleId() ?>">
    <?= $block->heading() ?>
  </h3>
  <?php endif ?>

  <?= snippet('layout/layouts', ['layouts' => $block->layout()->toLayouts()]) ?>
</div>
