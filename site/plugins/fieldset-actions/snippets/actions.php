<?php
  $actions = array(
    [
      'name' => 'Buy local fair-trade products',
      'categories' => array('build'),
      'subcategory' => 'Strengthening local resilience',
      'level' => 1,
      'sources' => array(
        [
          'name' => 'Foodwise',
          'url' => 'https://www.foodwise.com.au/'
        ],
        [
          'name' => 'Food Connect Foundation',
          'url' => 'http://foodconnectfoundation.org.au/'
        ],
        [
          'name' => 'Fair Food Forager',
          'url' => 'https://fairfoodforager.com.au/'
        ]
      )
    ],
    [
      'name' => 'Learn to dedramatise my feeling of guilt and inadequacy',
      'categories' => array('intervene'),
      'subcategory' => 'Raising awareness through art',
      'level' => 1,
      'sources' => array([
        'name' => 'Sorry Children',
        'url' => 'https://sorrychildren.com/en/'
      ])
    ],
    [
      'name' => 'Place my savings into banks that are serious about climate change',
      'categories' => array('intervene'),
      'subcategory' => 'Constraining finance',
      'level' => 2,
      'sources' => array(
        [
          'name' => 'Bank Track',
          'url' => 'https://www.banktrack.org/search#category=banks'
        ],
        [
          'name' => 'Market Forces',
          'url' => 'https://www.marketforces.org.au/info/compare-bank-table/'
        ]
      )
    ],
    [
      'name' => 'Join a local group raising awareness around systemic collapse risks',
      'categories' => array('regenerate'),
      'subcategory' => 'Reflecting complexity',
      'level' => 2,
      'sources' => array([
        'name' => 'Heart Community Group',
        'url' => 'https://heartcommunitygroup.org/'
      ])
    ],
    [
      'name' => 'Initiate a national debate for a sustainable population policy',
      'categories' => array('regenerate'),
      'subcategory' => 'Tackling the demographic taboo',
      'level' => 3,
      'sources' => array(
        [
          'name' => 'Center for Biological Diversity',
          'url' => 'https://www.biologicaldiversity.org/programs/population_and_sustainability/#3'
        ],
        [
          'name' => 'Population Matters',
          'url' => 'https://populationmatters.org/'
        ]
      )
    ],
    [
      'name' => 'Go on hunger strike for a stable climate',
      'categories' => array('intervene'),
      'subcategory' => 'Impeaching environmentally damaging activities',
      'level' => 3,
      'sources' => array([
        'name' => 'Beautiful Trouble',
        'url' => 'https://beautifultrouble.org/toolbox/tool/hunger-strike'
      ])
    ]
  );
?>

<div class="columns is-multiline is-centered">
  <?php foreach ($actions as $action): ?>
  <div class="column is-half-tablet is-two-fifths-desktop">
    <?= snippet('blocks/action', ['action' => $action]) ?>
  </div>
  <?php endforeach ?>
</div>

<?php if ($block->buttons()->isNotEmpty()): ?>
<div class="buttons is-centered">
  <?php foreach ($block->buttons()->toStructure() as $button): ?>
  <?php $url = $button->type() == 'page' ? $button->page()->toPage()->url() : $button->url()->escape('attr'); ?>
  <a class="button is-dark is-outlined" href="<?= $url ?>">
    <?= $button->label()->escape() ?>
  </a>
  <?php endforeach ?>
</div>
<?php endif ?>
