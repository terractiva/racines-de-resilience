<?php snippet('layout/html-open') ?>
<?php snippet('layout/nav', ['isTree' => true]) ?>
<main>
  <canvas></canvas>

  <div class="tree-container" style="cursor: grab; transform: scale(0.1);">
    <div>
      <img alt="<?= $page->title()->escape('attr') ?>" class="tree-image" src="<?= $page->parent()->content($page->language())->treeImage()->toFile()->resize(6000)->url() ?>" />

      <ul class="tree-items">
        <?php foreach (collection('subcategories') as $subcategory) : ?>
          <?php
          $position = $subcategory->position()->split();
          $size = $subcategory->size()->split();
          ?>
          <li class="tree-subcategory" style="left: <?= $position[0] ?>%; top: <?= $position[1] ?>%; width: <?= $size[0] ?>%; height: <?= $size[1] ?>%;">
            <a class="<?= $subcategory->categories() ?>" href="<?= $subcategory->url() ?>" target="_blank">
              <?= $subcategory->title()->escape() ?>
            </a>
          </li>
        <?php endforeach ?>

        <?php foreach ($page->children() as $action) : ?>
          <?php $position = $action->position()->split(); ?>
          <li class="tree-action<?= $action->classes() ?><?php e($action->level()->toInt() === 0, ' is-bibliography') ?>" style="left: <?= $position[0] ?>%; top: <?= $position[1] ?>%; width: <?= 2 * $action->radius()->toFloat() ?>%;">
            <button class="tree-action-button" data-target="modal-<?= $action->positionId() ?>" type="button">
              <p class="tree-action-name">
                <?= $action->title()->escape() ?>
              </p>
              <div class="tree-action-separator"></div>
              <p class="tree-action-sources">
                <?php foreach ($action->sources()->toStructure() as $source) : ?>
                  <?= $source->name()->escape() ?><?php e(!$source->isLast(), ',') ?>
                <?php endforeach ?>
              </p>
            </button>
          </li>
        <?php endforeach ?>
      </ul>
    </div>
  </div>

  <div class="tree-dropdowns">
    <details class="tree-dropdowns-credits dropdown is-active">
      <summary class="button is-bullet-less is-dark is-responsive">
        <span class="icon">©</span>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <div class="dropdown-item">
            <?= $page->copyright() ?>
          </div>
        </div>
      </div>
    </details>

    <details class="dropdown is-active">
      <summary class="button is-dark is-responsive">
        <?= $page->title()->escape() ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <?php foreach ($page->parent()->children()->listed()->groupBy('language') as $language => $trees) : ?>
            <div class="dropdown-divider">
              <p><?= $kirby->language($language)->name() ?></p>
            </div>
            <?php foreach ($trees as $tree) : ?>
              <a class="dropdown-item<?= e($tree->isOpen(), ' is-active') ?>" href="<?= ($tree->urlForLanguage($language)) ?>">
                <?= esc($tree->translation($language)->content()['title']) ?>
              </a>
            <?php endforeach ?>
          <?php endforeach ?>
        </div>
      </div>
    </details>
  </div>

  <?php
  if ($page->uid() === 'france') {
    snippet('elements/buttons', [
      'buttons' => $page->parent()->buttons(),
      'buttonClasses' => 'is-responsive',
      'classes' => 'tree-buttons',
      'target' => '_blank'
    ]);
  }
  ?>

  <div class="tree-zoom-buttons buttons has-addons">
    <button class="button is-minus is-dark is-rounded" type="button"><span class="icon">-</span></button>
    <button class="button is-plus is-dark is-rounded" type="button"><span class="icon">+</span></button>
  </div>

  <?php foreach ($page->children() as $action) : ?>
    <div class="modal" id="modal-<?= $action->positionId() ?>">
      <button class="modal-background" type="button">
        <div class="modal-close is-large"></div>
      </button>

      <div class="modal-card">
        <section class="modal-card-body">
          <?php snippet('elements/action', ['action' => $action, 'doOpenInNewTab' => true]) ?>

          <div class="modal-card-content">
            <div class="buttons">
              <?php
              $formUrl = $site->airtableFormUrl();
              $formUrlParams = '?prefill_Type=' . esc(t('tree.modal.airtableActionType'), 'url') .
                '&prefill_Name=' . $action->title()->escape('url');
              ?>
              <a class="button <?= $action->classes() ?> is-fullwidth" href="<?= $formUrl . $formUrlParams ?>" target="_blank">
                <?= t('tree.modal.addSourceButton') ?>
              </a>
            </div>

            <p><?= t('tree.modal.openLinkInNewTabHelper') ?></p>
          </div>
        </section>
      </div>
    </div>
  <?php endforeach ?>
</main>
<?php snippet('layout/html-close', ['showCarbonBadge' => false]) ?>