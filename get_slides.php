<?php
  $paths = glob("slideshow/*.jpg");
  shuffle($paths);
  $json = array();
  foreach ($paths as $path) {
    $info_path = substr($path, 0, strpos($path, ".")) . ".txt";
    $info;
    $root = substr($path, strrpos($path, "/") + 1);
    $root = substr($root, 0, strlen($root) - 4);
    $name = str_replace("-", " ", $root);
    $img = array("path"=>"../" . $path,
                 "name"=>$name);
    $json[] = $img;
  }
  header('Content-Type: application/json');
  echo json_encode($json);
?>