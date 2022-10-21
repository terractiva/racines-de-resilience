<?php
  $url = null;

  switch ($link->type()) {
    case 'page':
      $anchor = $link->pageAnchor()->isNotEmpty() ? '#' . $link->pageAnchor()->escape('url') : '';
      $url = $link->page()->toPage()->url() . $anchor;
      break;
    case 'url':
      $url = $link->url()->escape('attr');
      break;
    case 'email':
      $subject = $link->emailSubject()->isNotEmpty() ? '?subject=' . $link->emailSubject()->escape('url') : '';
      $url = 'mailto:' . Str::encode($link->email()->escape()) . $subject;
      break;
  }
?>
<a class="<?= $class ?>" href="<?= $url ?>">
  <?= $link->label()->escape() ?>
</a>
