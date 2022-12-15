<?php $query = $kirby->request()->query(); ?>

<form action="<?= $page->url() . '#action-filters' ?>" class="actions-filters columns is-gapless is-multiline" id="action-filters">
  <div class="column is-12">
    <label for="search-action"><?= t('actions.filters.search') ?>&nbsp;</label>
    <input class="input is-dark" id="search-action" minlength="2" name="search-action" placeholder="<?= t('actions.filters.inputs.searchAction.placeholder') ?>" type="text" value="<?= $query->get('search-action') ?>" />

    <label for="search-source"><span>&nbsp;</span><?= t('actions.filters.andOr') ?>&nbsp;</label>
    <input class="input is-dark" minlength="2" id="search-source" name="search-source" placeholder="<?= t('actions.filters.inputs.searchSource.placeholder') ?>" type="text" value="<?= $query->get('search-source') ?>" />
  </div>

  <div class="column is-12">
    <p><?= t('actions.filters.filterBy') ?>&nbsp;</p>
    <details class="dropdown is-center is-active">
      <summary class="button is-dark is-outlined">
        <?= t('actions.filters.inputs.levels.toggle') ?><?php e(count($query->get('levels', [])) > 0, ' (' . count($query->get('levels', [])) . ')') ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('0', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="0" /> <?= t('actions.filters.inputs.levels.options.0') ?>
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('1', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="1" /> <?= t('actions.filters.inputs.levels.options.1') ?>
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('2', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="2" /> <?= t('actions.filters.inputs.levels.options.2') ?>
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('3', $query->get('levels', [])), 'checked ') ?>name="levels[]" type="checkbox" value="3" /> <?= t('actions.filters.inputs.levels.options.3') ?>
          </label>
        </div>
      </div>
    </details>

    <p><span>&nbsp;</span><?= t('actions.filters.andOr') ?>&nbsp;</p>
    <details class="dropdown is-center is-active">
      <summary class="button is-dark is-outlined">
        <?= t('actions.filters.inputs.categories.toggle') ?><?php e(count($query->get('categories', [])) > 0, ' (' . count($query->get('categories', [])) . ')') ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('build', $query->get('categories', [])), 'checked ') ?>name="categories[]" type="checkbox" value="build" /> <?= t('actions.filters.inputs.categories.options.build') ?>
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('regenerate', $query->get('categories', [])), 'checked ') ?>name="categories[]" type="checkbox" value="regenerate" /> <?= t('actions.filters.inputs.categories.options.regenerate') ?>
          </label>
          <label class="checkbox dropdown-item">
            <input <?php e(in_array('intervene', $query->get('categories', [])), 'checked ') ?>name="categories[]" type="checkbox" value="intervene" /> <?= t('actions.filters.inputs.categories.options.intervene') ?>
          </label>
        </div>
      </div>
    </details>

    <p><span>&nbsp;</span><?= t('actions.filters.andOr') ?>&nbsp;</p>
    <details class="dropdown is-center is-active">
      <summary class="button is-dark is-outlined">
        <?= t('actions.filters.inputs.subcategories.toggle') ?><?php e(count($query->get('subcategories', [])) > 0, ' (' . count($query->get('subcategories', [])) . ')') ?>
      </summary>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <?php foreach (collection('subcategories') as $subcategory) : ?>
            <label class="checkbox dropdown-item">
              <input <?php e(in_array($subcategory->num(), $query->get('subcategories', [])), 'checked ') ?>name="subcategories[]" type="checkbox" value="<?= $subcategory->num() ?>" />
              <?= $subcategory->title()->escape() ?>
            </label>
          <?php endforeach ?>
        </div>
      </div>
    </details>
  </div>

  <?php $locations = collection('locations'); ?>
  <column class="column is-narrow">
    <label for="country"><?= t('actions.filters.filterByLocation') ?>&nbsp;</label>

    <div class="select is-dark">
      <select id="country" name="country">
        <option value=""><?= t('actions.filters.inputs.country.placeholder') ?></option>
        <?php foreach ($locations['countries'] as $country) : ?>
          <option <?php e($query->get('country') == $country, 'selected') ?>><?= $country ?></option>
        <?php endforeach ?>
      </select>
    </div>

    <?php if ($query->get('country', '') !== '') : ?>
      <?php $regions = $locations['regionsByCountry'][$query->get('country')] ?? []; ?>
      <?php if (count($regions) > 0) : ?>
        <div class="select is-dark">
          <select id="region" name="region">
            <option value=""><?= t('actions.filters.inputs.region.placeholder') ?></option>
            <?php foreach ($regions as $region) : ?>
              <option <?php e($query->get('region') == $region, 'selected') ?>><?= $region ?></option>
            <?php endforeach ?>
          </select>
        </div>
      <?php endif ?>
    <?php endif ?>

    <?php if ($query->get('region', '') !== '') : ?>
      <?php $departments = $locations['departmentsByRegion'][$query->get('region')] ?? []; ?>
      <?php if (count($departments) > 0) : ?>
        <div class="select is-dark">
          <select id="department" name="department">
            <option value=""><?= t('actions.filters.inputs.department.placeholder') ?></option>
            <?php foreach ($departments as $department) : ?>
              <option <?php e($query->get('department') == $department, 'selected') ?>><?= $department ?></option>
            <?php endforeach ?>
          </select>
        </div>
      <?php endif ?>
    <?php endif ?>
  </column>

  <div class="column is-narrow">
    <button class="button is-dark" type="submit">
      <?= t('actions.filters.submit') ?>
    </button>
  </div>
</form>