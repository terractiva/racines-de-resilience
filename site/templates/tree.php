<?php snippet('layout/html-open') ?>
  <?php snippet('layout/nav', ['isTree' => true]) ?>
  <main>
    <img alt="<?= $page->title()->escape('attr') ?>" class="tree" src="<?= $page->treeImage()->toFile()->resize(6000)->url() ?>" />

    <ul class="actions">
      <?php foreach ($page->actions() as $action): ?>
      <li style="left: <?= $action->position[0] ?>%; top: <?= $action->position[1] ?>%; width: <?= 2 * $action->radius ?>%;">
        <p><?= $action->id ?></p>
      </li>
      <?php endforeach ?>
    </ul>
  </main>
<?php snippet('layout/html-close') ?>
