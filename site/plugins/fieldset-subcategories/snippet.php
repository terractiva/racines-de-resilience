<div class="subcategories horizontal-slider is-automatic is-fullwidth">
  <?php
    $subcategories = collection('subcategories');
    $lineSize = $subcategories->count() / 2;
  ?>
  <?php foreach ($subcategories as $subcategory) : ?>
    <?php if ($subcategory->indexOf() % $lineSize === 0) : ?>
      <ul>
    <?php endif ?>
      <li>
        <a class="box <?= $subcategory->categories() ?>" href="<?= $subcategory->url() ?>">
          <h3 class="title is-5">
            <?= $subcategory->emoji()->escape() ?> <?= $subcategory->title()->escape() ?>
          </h3>
        </a>
      </li>
    <?php if ($subcategory->isLast() || $subcategory->indexOf() % $lineSize === ($lineSize - 1)) : ?>
      </ul>
    <?php endif ?>
  <?php endforeach ?>
</div>