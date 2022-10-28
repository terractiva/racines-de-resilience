<div class="subcategories columns is-mobile is-multiline">
  <?php foreach (collection('subcategories') as $subcategory): ?>
  <div class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
    <a class="box" href="<?= $subcategory->url() ?>">
      <h3 class="title is-5">
        <?= $subcategory->title()->escape() ?>
      </h3>
    </a>
  </div>
  <?php endforeach ?>
</div>
