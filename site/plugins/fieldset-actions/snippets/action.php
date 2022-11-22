<div class="action<?= $action->classes() ?>">
  <div class="action-name title is-6">
    <?php if ($action->level()->isNotEmpty() && $action->level()->toInt() > 0): ?>
    <p class="action-level">
      <?= str_repeat('∎', $action->level()->toInt()) ?>
    </p>
    <?php endif ?>
    <p>
      <?= $action->title()->escape() ?>
    </p>
  </div>

  <p class="action-sources">
    <?php foreach ($action->sources()->toStructure() as $source): ?>
    <?php e($hasLink = $source->link()->isNotEmpty(), '<a class="' . $action->classes() . '" href="' . $source->link()->escape('attr') . '">'); ?>
    <?= $source->name()->escape() ?><?php e($hasLink, '</a>') . e(!$source->isLast(), ','); ?>
    <?php endforeach ?>
  </p>

  <?php if ($action->subcategory()->isNotEmpty()): ?>
  <?php $subcategory = $action->subcategory()->toPage(); ?>
  <a class="action-subcategory" href="<?= $subcategory->url() ?>">
    <?= $subcategory->title()->escape() ?>
  </a>
  <?php endif ?>
</div>
