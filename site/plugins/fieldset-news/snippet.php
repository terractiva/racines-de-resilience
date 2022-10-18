<div class="news columns is-multiline">
  <?php foreach ($site->news()->toStructure() as $newsItem): ?>
  <div class="column is-4">
    <div class="card">
      <div class="card-content">
        <h3 class="title is-5">
          <?= $newsItem->heading() ?>
        </h3>
        <p class="subtitle is-6">
          <?= snippet('elements/time', ['date' => $newsItem->date()]) ?>
        </p>
        <div class="content">
          <?= $newsItem->text() ?>
        </div>
      </div>

      <?php if ($newsItem->linkUrl()->isNotEmpty() && $newsItem->linkLabel()->isNotEmpty()): ?>
      <footer class="card-footer">
        <a class="card-footer-item" href="<?= $newsItem->linkUrl()->escape('attr') ?>">
          <?= $newsItem->linkLabel() ?>
        </a>
      </footer>
      <?php endif ?>
    </div>
  </div>
  <?php endforeach ?>
</div>
