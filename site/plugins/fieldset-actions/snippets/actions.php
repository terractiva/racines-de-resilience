<?php
  $disablePagination = isset($disablePagination) ? $disablePagination : false;
  $currentPage = (int) $kirby->request()->query()->get('page', 1);
  $nbItemsPerPage = 12;
  $nbPages = (int) ceil($actions->count() / $nbItemsPerPage);
  $isLastPage = $currentPage === $nbPages;
  $actionsSubset = $disablePagination
    ? $actions
    : $actions->offset($nbItemsPerPage * ($currentPage - 1))->limit($nbItemsPerPage);

  function computePageUrl($page, $pageNb = null) {
    $result = $page->url();

    if ($pageNb !== null) $result .= '?page=' . $pageNb;

    return $result . '#actions';
  }
?>

<ul class="columns is-centered is-multiline" id="actions">
  <?php foreach ($actionsSubset as $action): ?>
  <li class="column is-half-tablet is-two-fifths-desktop">
    <?php snippet('elements/action', ['action' => $action]) ?>
  </li>
  <?php endforeach ?>
  </ul>

<?php if (!$disablePagination && $nbPages > 1): ?>
<div class="columns is-centered">
  <div class="column is-four-fifths-desktop">
    <div class="actions-pagination columns is-gapless is-vcentered">
      <p class="actions-pagination-counter column is-one-third">
        <?= t('actions.counter.itemsName') ?> <strong><?= $nbItemsPerPage * ($currentPage - 1) + 1 ?>
        </strong><?= t('actions.counter.to') ?><strong> <?= $isLastPage ? $actions->count() : $nbItemsPerPage * $currentPage ?>
        </strong><?= t('actions.counter.of') ?><strong> <?= $actions->count() ?></strong>
      </p>

      <form action="<?= computePageUrl($page) ?>" class="column is-one-third is-align-self-center">
        <p><?= t('actions.pagination.page') ?>&nbsp;</p>
        <input class="input" name="page" type="number" min="1" max="<?= $nbPages ?>" value="<?= $currentPage ?>" />
        <p>&nbsp;<?= t('actions.pagination.of') ?> <strong><?= $nbPages ?></strong></p>
      </form>

      <div class="actions-pagination-buttons column is-one-third">
        <?php if ($currentPage === 1): ?>
          <button class="button is-ghost" disabled>← <?= t('actions.previous') ?></button>
        <?php else: ?>
          <a class="button is-ghost" href="<?= computePageUrl($page, $currentPage - 1) ?>">← <?= t('actions.previous') ?></a>
        <?php endif ?>

        <?php if ($isLastPage): ?>
          <button class="button is-ghost" disabled><?= t('actions.next') ?> →</button>
        <?php else: ?>
          <a class="button is-ghost" href="<?= computePageUrl($page, $currentPage + 1) ?>"><?= t('actions.next') ?> →</a>
        <?php endif ?>
      </div>
    </div>
  </div>
</div>
<?php endif ?>
