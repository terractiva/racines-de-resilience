<ul class="news horizontal-slider">
  <?php foreach ($site->news()->toStructure() as $newsItem) : ?>
    <li class="column is-11-mobile is-three-fifths-tablet is-two-fifths-desktop is-one-third-widescreen">
      <div class="box">
        <h3 class="title is-5">
          <?= $newsItem->heading() ?>
        </h3>
        <p class="subtitle is-6">
          <?php snippet('elements/time', ['date' => $newsItem->date()]) ?>
        </p>
        <div class="content">
          <?= $newsItem->text() ?>
        </div>

        <?php if ($newsItem->linkUrl()->isNotEmpty() && $newsItem->linkLabel()->isNotEmpty()) : ?>
          <a class="button is-dark" href="<?= $newsItem->linkUrl()->escape('attr') ?>">
            <?= $newsItem->linkLabel() ?>
          </a>
        <?php endif ?>
      </div>
    </li>
  <?php endforeach ?>
</ul>
