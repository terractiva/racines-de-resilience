<?php

return function () {
  $actions = collection('actions');
  $selection = $actions->filterBy('level', 0)->random(2, true);

  $selection->add($actions->filterBy('level', 1)->random(2, true));
  $selection->add($actions->filterBy('level', 2)->random(2, true));
  $selection->add($actions->filterBy('level', 3)->random(2, true));

  return $selection;
};
