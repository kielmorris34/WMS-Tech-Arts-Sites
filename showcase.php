<?php
  if ($_GET["dir"]) {
    $dir = $_GET["dir"];
    $paths = glob("imgs/$dir/*.jpg");
    $json = array();
    foreach ($paths as $path) {
      $root = substr($path, strrpos($path, "/") + 1);
      $root = substr($root, 0, strlen($root) - 4);
      $name = str_replace("-", " ", $root);
      $img = array("path"=>"../" . $path,
                   "name"=>$name,
                  );
      $json[] = $img;
    }
    header('Content-Type: application/json');
    echo json_encode($json);
  }
?>