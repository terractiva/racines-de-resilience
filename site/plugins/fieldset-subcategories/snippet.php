<div class="subcategories columns is-mobile is-multiline">
  <?php foreach (collection('subcategories') as $subcategory): ?>
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <a class="box <?= $subcategory->categories() ?>" href="<?= $subcategory->url() ?>">
      <h3 class="title is-5">
        <?= $subcategory->emoji()->escape() ?> <?= $subcategory->title()->escape() ?>
      </h3>
    </a>
  </div>
  <?php endforeach ?>
</div>
