<?php
  header('Access-Control-Allow-Headers: *');
  header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');

  $paths = glob("slideshow/*.jpg");
  shuffle($paths);
  $json = array();
  foreach ($paths as $path) {
    $info_path = substr($path, 0, strpos($path, ".")) . ".txt";
    $info;
    if (file_exists($info_path)) {
      $info = file_get_contents($info_path);
    } else {
      $info = "no information found";
    }
    $img = array("name"=>"../" . $path,
                 "info"=>$info);
    $json[] = $img;
  }
  header('Content-Type: application/json');
  echo json_encode($json);
?>