<?php
  $disablePagination = isset($disablePagination) ? $disablePagination : false;
  $actionsSubset = $actions;
  $query = $kirby->request()->query();

  if (!$disablePagination) {
    if ($query->get('search-action', '') !== '') {
      $actionsSubset = $actionsSubset->search($query->get('search-action'), 'title');
    }
    if ($query->get('search-source', '') !== '') {
      $actionsSubset = $actionsSubset->filter(function($action) use($query) {
        return $action->sources()->toStructure()->search($query->get('search-source'), 'name')->count() > 0;
      });
    }
    if ($query->get('levels') !== null) {
      $actionsSubset = $actionsSubset->filterBy('level', 'in', $query->get('levels'));
    }
    if ($query->get('categories') !== null) {
      $actionsSubset = $actionsSubset->filterBy('categories', 'in', $query->get('categories'));
    }
    if ($query->get('subcategories') !== null) {
      $actionsSubset = $actionsSubset->filter(function($action) use($query) {
        return $action->subcategory()->isNotEmpty() &&
          in_array($action->subcategory()->toPage()->num(), $query->get('subcategories'));
      });
    }

    $currentPage = (int) $kirby->request()->query()->get('page', 1);
    $nbActions = $actionsSubset->count();
    $nbItemsPerPage = 12;
    $nbPages = (int) ceil($nbActions / $nbItemsPerPage);
    $actionsSubset = $actionsSubset->offset($nbItemsPerPage * ($currentPage - 1))->limit($nbItemsPerPage);
    $isLastPage = $currentPage === $nbPages;
  }

  function computePageUrl($page, $query = null, $pageNb = null) {
    $result = $page->url();
    $resultQuery = $query ? $query->toArray() : [];

    if ($pageNb) $resultQuery['page'] = $pageNb;

    $resultQuery = http_build_query($resultQuery);

    return $result . ($resultQuery ? '?' . $resultQuery : '') . '#actions';
  }
?>

<?php if (count($actionsSubset) > 0): ?>
<ul class="columns is-multiline" id="actions">
  <?php foreach ($actionsSubset as $action): ?>
  <li class="column is-half-tablet">
    <?php snippet('elements/action', ['action' => $action]) ?>
  </li>
  <?php endforeach ?>
</ul>
<?php else: ?>
  <p class="actions-placeholder content">
    <?= t('actions.placeholder') ?>
  </p>
<?php endif ?>

<?php if (!$disablePagination && $nbPages > 1): ?>
<div class="actions-pagination columns is-gapless is-vcentered">
  <p class="actions-pagination-counter column is-one-third">
    <?= t('actions.pagination.counter.itemsName') ?> <strong><?= $nbItemsPerPage * ($currentPage - 1) + 1 ?>
    </strong><?= t('actions.pagination.counter.to') ?><strong> <?= $isLastPage ? $nbActions : $nbItemsPerPage * $currentPage ?>
    </strong><?= t('actions.pagination.counter.of') ?><strong> <?= $nbActions ?></strong>
  </p>

  <form action="<?= computePageUrl($page) ?>" class="column is-one-third is-align-self-center">
    <p><?= t('actions.pagination.page') ?>&nbsp;</p>
    <input class="input" name="page" type="number" min="1" max="<?= $nbPages ?>" value="<?= $currentPage ?>" />
    <p>&nbsp;<?= t('actions.pagination.of') ?> <strong><?= $nbPages ?></strong>&nbsp;</p>
    <button class="button is-white" type="submit">
      <span class="icon">↳</span>
    </button>

    <?php foreach ($query->toArray() as $key => $value): ?>
    <?php if ($key !== 'page'): ?>
    <?php if (is_array($value)): ?>
    <?php foreach ($value as $valueItem): ?>
    <input name="<?= $key ?>[]" type="hidden" value="<?= $valueItem ?>" />
    <?php endforeach ?>
    <?php else: ?>
    <input name="<?= $key ?>" type="hidden" value="<?= $value ?>" />
    <?php endif ?>
    <?php endif ?>
    <?php endforeach ?>
  </form>

  <div class="actions-pagination-buttons column is-one-third">
    <?php if ($currentPage === 1): ?>
      <button class="button is-ghost" disabled>← <?= t('actions.pagination.previous') ?></button>
    <?php else: ?>
      <a class="button is-ghost" href="<?= computePageUrl($page, $query, $currentPage - 1) ?>">← <?= t('actions.pagination.previous') ?></a>
    <?php endif ?>

    <?php if ($isLastPage): ?>
      <button class="button is-ghost" disabled><?= t('actions.pagination.next') ?> →</button>
    <?php else: ?>
      <a class="button is-ghost" href="<?= computePageUrl($page, $query, $currentPage + 1) ?>"><?= t('actions.pagination.next') ?> →</a>
    <?php endif ?>
  </div>
</div>
<?php endif ?>
