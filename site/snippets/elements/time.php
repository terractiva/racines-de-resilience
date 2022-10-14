<time datetime="<?= $date->toDate('c') ?>">
<?php $formatter = new IntlDateFormatter($kirby->language()->code(), IntlDateFormatter::LONG, IntlDateFormatter::NONE); ?>
<?= $formatter->format($date->toDate()) ?>
</time>
