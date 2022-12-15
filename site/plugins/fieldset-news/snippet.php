<ul class="news horizontal-slider">
  <?php foreach ($site->news()->toStructure() as $newsItem) : ?>
    <li class="column is-11-mobile is-three-fifths-tablet is-two-fifths-desktop is-one-third-widescreen">
      <input id="news-toggle-<?= $newsItem->id() ?>" type="checkbox" />

      <div class="box">
        <label class="button is-white is-fullwidth" for="news-toggle-<?= $newsItem->id() ?>">
          +
        </label>

        <h3 class="title is-5">
          <?= $newsItem->heading() ?>
        </h3>
        <p class="subtitle is-6">
          <?php snippet('elements/time', ['date' => $newsItem->date()]) ?>
        </p>
        <div class="content">
          <?= $newsItem->text() ?>
        </div>
      </div>

      <?php if ($newsItem->linkUrl()->isNotEmpty() && $newsItem->linkLabel()->isNotEmpty()) : ?>
        <a class="button is-dark is-fullwidth" href="<?= $newsItem->linkUrl()->escape('attr') ?>">
          <?= $newsItem->linkLabel() ?>
        </a>
      <?php endif ?>
    </li>
  <?php endforeach ?>
</ul>
