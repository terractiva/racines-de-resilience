<?php

class TreePage extends Page
{
  public function actions()
  {
    return json_decode(file_get_contents('site/models/actions.json'));
  }
}
