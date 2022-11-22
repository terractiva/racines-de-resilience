<?php snippet('layout/html-open') ?>
  <?php snippet('layout/nav', ['isTree' => true]) ?>
  <main>
    <div class="tree-container">
      <img
        alt="<?= $page->title()->escape('attr') ?>"
        class="tree-image"
        src="<?= $page->parent()->content($page->language())->treeImage()->toFile()->resize(6000)->url() ?>"
      />

      <ul class="tree-actions">
        <?php foreach ($page->children() as $action): ?>
        <?php $position = $action->position()->split(); ?>
        <li
          class="tree-action<?= $action->classes() ?>"
          style="left: <?= $position[0] ?>%; top: <?= $position[1] ?>%; width: <?= 2 * $action->radius()->toFloat() ?>%;"
        >
          <button class="js-modal-trigger" data-target="modal-<?= $action->positionId() ?>" type="button">
            <p class="tree-action-name">
              <?= $action->title()->escape() ?>
            </p>
            <div class="tree-action-separator"></div>
            <p class="tree-action-sources">
              <?php foreach ($action->sources()->toStructure() as $source): ?>
              <?= $source->name()->escape() ?><?php e(!$source->isLast(), ','); ?>
              <?php endforeach ?>
            </p>
          </button>
        </li>
        <?php endforeach ?>
      </ul>
    </div>

    <div class="tree-dropdowns">
      <details class="tree-dropdowns-credits dropdown is-active">
        <summary class="button is-bullet-less is-dark is-outlined is-responsive">
          <span class="icon">©</span>
        </summary>

        <div class="dropdown-menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <?= $page->parent()->copyright() ?>
            </div>
          </div>
        </div>
      </details>

      <details class="dropdown is-active">
        <summary class="button is-dark is-outlined is-responsive">
          <?= $page->title()->escape() ?>
        </summary>

        <div class="dropdown-menu">
          <div class="dropdown-content">
            <?php foreach ($page->parent()->children()->listed() as $tree): ?>
            <a class="dropdown-item<?= e($tree->isOpen(), ' is-active') ?>" href="<?= $tree->url() ?>">
              <?= $tree->title()->escape() ?> - <?= $kirby->language($tree->language())->name() ?>
            </a>
            <?php endforeach ?>
          </div>
        </div>
      </details>
    </div>

    <?php snippet('elements/buttons', ['buttons' => $page->parent()->buttons(), 'buttonClasses' => 'is-responsive', 'classes' => 'tree-buttons']) ?>

    <?php foreach ($page->children() as $action): ?>
    <div class="modal" id="modal-<?= $action->positionId() ?>">
      <div class="modal-background"></div>
      <div class="modal-card">
        <section class="modal-card-body">
          <?php snippet('elements/action', ['action' => $action]) ?>
        </section>
      </div>
      <button class="modal-close is-large" type="button"></button>
    </div>
    <?php endforeach ?>
  </main>

  <script>
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);

      $trigger.addEventListener('click', () => {
        $target.classList.add('is-active');
      });
    });

    (document.querySelectorAll('.modal-close') || []).forEach(($close) => {
      const $target = $close.closest('.modal');

      $close.addEventListener('click', () => {
        $target.classList.remove('is-active');
      });
    });
  </script>
<?php snippet('layout/html-close') ?>
