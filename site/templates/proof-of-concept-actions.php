<?php snippet('proof-of-concept/header') ?>

<section>
  <form method="get" action="<?= $page->url() ?>">
    <fieldset>
      <legend>Recherche</legend>

      <label>
        Action :
        <input name="action-term" type="text" value="<?= esc(get('action-term', ''), 'attr') ?>" />
      </label>
      <label>
        Source :
        <input name="source-term" type="text" value="<?= esc(get('source-term', ''), 'attr') ?>" />
      </label>
    </fieldset>

    <fieldset>
      <legend>Niveau</legend>

      <label>
        <input <?= in_array('1', get('level', [])) ? 'checked' : '' ?> name="level[]" type="checkbox" value="1" />
        1
      </label>
      <label>
        <input <?= in_array('2', get('level', [])) ? 'checked' : '' ?> name="level[]" type="checkbox" value="2" />
        2
      </label>
      <label>
        <input <?= in_array('3', get('level', [])) ? 'checked' : '' ?> name="level[]" type="checkbox" value="3" />
        3
      </label>
    </fieldset>

    <fieldset>
      <legend>Pays</legend>

      <select name="country">
        <option <?= get('country') == '' ? 'selected' : '' ?> value="">Tous les pays</option>
        <option <?= get('country') == 'FR' ? 'selected' : '' ?>>FR</option>
        <option <?= get('country') == 'US' ? 'selected' : '' ?>>US</option>
      </select>
    </fieldset>

    <button>Rechercher</button>
  </form>

  <ul>
    <?php foreach ($page->children() as $action): ?>
    <li>
      <a href="<?= $action->url() ?>"><?= $action->title() ?></a>
    </li>
    <?php endforeach ?>
  </ul>
</section>

<?php snippet('proof-of-concept/footer') ?>
