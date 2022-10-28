<?php snippet('elements/actions', ['actions' => $block->isSelection()->toBool() ? collection('action-selection') : collection('actions')->sort()]) ?>
