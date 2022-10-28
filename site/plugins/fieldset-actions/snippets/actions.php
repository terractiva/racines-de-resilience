<div class="columns is-centered is-multiline">
  <?php foreach ($actions as $action): ?>
  <div class="column is-half-tablet is-two-fifths-desktop">
    <?php snippet('elements/action', ['action' => $action]) ?>
  </div>
  <?php endforeach ?>
</div>
