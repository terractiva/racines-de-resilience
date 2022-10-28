<?php

return function ($site) {
  return $site->find('page://YKln3T0YKA0khias')->children()->listed()->filterBy('language', kirby()->language()->code());
};
