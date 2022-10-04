<?php snippet('proof-of-concept/header') ?>

<section>
  <h2 class="h2">Actualités</h2>

  <!-- TODO: placeholder si pas d'actualités -->
  <ul class="grid" style="--columns: 4">
    <?php foreach ($page->news()->toStructure() as $newsItem): ?>
    <li class="column">
      <h3 class="h3 text"><?= $newsItem->title()->text() ?></h3>
      <div class="text">
        <?= $newsItem->content()->get('content')->sanitize() ?>
      </div>
      <?php
        $buttonAttr = ['class' => 'button'];

        if ($newsItem->buttonType() == 'url'):
      ?>
      <a href="<?= $newsItem->buttonUrl() ?>">
        <?= $newsItem->buttonLabel()->text() ?>
      </a>
      <?php elseif ($newsItem->buttonType() == 'email'): ?>
      <a href="mailto:<?= Str::encode($newsItem->buttonEmail()) ?>">
        <?= $newsItem->buttonLabel()->text() ?>
      </a>
      <?php endif ?>
    </li>
    <?php endforeach ?>
  </ul>
</section>

<section>
  <?php snippet('blocks/partners') ?>
</section>

<?php snippet('proof-of-concept/footer') ?>
