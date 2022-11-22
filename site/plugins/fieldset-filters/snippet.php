<?php $query = $kirby->request()->query(); ?>

<form action="<?= $page->url() . '#action-filters' ?>" class="actions-filters columns is-gapless is-multiline" id="action-filters">
  <div class="column is-12">
    <label for="search-action">Rechercher&nbsp;</label>
    <input class="input is-dark" id="search-action" minlength="2" name="search-action" placeholder="une action" type="text" value="<?= $query->get('search-action') ?>" />

    <label for="search-source"><span>&nbsp;</span>et / ou&nbsp;</label>
    <input class="input is-dark" minlength="2" id="search-source" name="search-source" placeholder="une structure / organisation / initiative" type="text" value="<?= $query->get('search-source') ?>" />
  </div>

  <div class="column is-narrow">
    <p>Filtrer par&nbsp;</p>
    <details class="dropdown is-center is-active">
      <summary class="button is-dark is-outlined">
        niveau d'engagement<?php e(count($query->get('levels', [])) > 0, ' (' . count($query->get('levels', [])) . ')') ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('0', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="0" /> S'informer
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('1', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="1" /> Premier pas
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('2', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="2" /> Bon intermédiaire
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('3', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="3" /> Grand saut
          </label>
        </div>
      </div>
    </details>

    <p><span>&nbsp;</span>et / ou&nbsp;</p>
    <details class="dropdown is-center is-active">
      <summary class="button is-dark is-outlined">
        catégorie<?php e(count($query->get('categories', [])) > 0, ' (' . count($query->get('categories', [])) . ')') ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('build', $query->get('categories', [])), 'checked ') ?>name="categories[]" type="checkbox" value="build" /> Construire
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('regenerate', $query->get('categories', [])), 'checked ') ?>name="categories[]" type="checkbox" value="regenerate" /> Régénérer
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('intervene', $query->get('categories', [])), 'checked ') ?>name="categories[]" type="checkbox" value="intervene" /> S'interposer
          </label>
        </div>
      </div>
    </details>

    <p><span>&nbsp;</span>et / ou&nbsp;</p>
    <details class="dropdown is-center is-active">
      <summary class="button is-dark is-outlined">
        thématique<?php e(count($query->get('subcategories', [])) > 0, ' (' . count($query->get('subcategories', [])) . ')') ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <?php foreach (collection('subcategories') as $subcategory): ?>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array($subcategory->num(), $query->get('subcategories', [])), 'checked ') ?>name="subcategories[]" type="checkbox" value="<?= $subcategory->num() ?>" />
            <?= $subcategory->title()->escape() ?>
          </label>
          <?php endforeach ?>
        </div>
      </div>
    </details>
  </div>

  <div class="column is-narrow">
    <button class="button is-dark" type="submit">Valider</button>
  </div>
</form>
