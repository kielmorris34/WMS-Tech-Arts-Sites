<?php
  error_reporting(E_ALL);

  $mats = file('../laser-mats.txt');

  if (isset($_GET["mode"])) {
    if ($_GET["mode"] == "mat" && isset($_GET["search"]) && $_GET["search"] != "") {
      $result = array();
      foreach ($mats as $line) {
        if (strpos(strtolower($line), strtolower($_GET["search"])) !== false) {
          array_push($result, makeMatArr($line));
        }
      }
      echo json_encode($result);
    } else if ($_GET["mode"] = "all" || ($_GET["search"] == "")) {
      $all = array();
      foreach ($mats as $line) {
        array_push($all, makeMatArr($line));
      }
      header("Content-type: application/json");
      echo json_encode($all);
    } else {
      header("HTTP/1.0 400 Bad Request");
      header("Content-type: text/plain");
      echo 'Please use a mode of "all" or "mat" with parameter "search"';
    }
  }

  function makeMatArr($line) {
    $mat = explode("-", $line);
   return $mat;
  }
  







?>