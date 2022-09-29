<?php snippet('proof-of-concept/header') ?>

<section>
  <h2 class="h2">Actualités</h2>

  <ul class="grid" style="--columns: 4">
    <?php foreach ($page->news()->toStructure() as $newsItem): ?>
    <li class="column">
      <h3 class="h3 text"><?= $newsItem->title()->text() ?></h3>
      <div class="text">
        <?= $newsItem->content()->content()->sanitize() ?>
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

<?php snippet('proof-of-concept/footer') ?>
