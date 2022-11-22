<?php snippet('layout/html-open') ?>
  <?php snippet('layout/nav') ?>
  <main>
    <?php snippet('sections/section-hero') ?>

    <section class="section">
      <div class="container">
        <?php snippet('elements/actions', ['actions' => collection('actions')->filterBy('subcategory', $page->uuid())]) ?>
      </div>
    </section>
  </main>
  <?php snippet('layout/footer') ?>
<?php snippet('layout/html-close') ?>
