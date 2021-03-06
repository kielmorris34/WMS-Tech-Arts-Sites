/*

*/

/* global fetch */
/* global checkStatus */
/* global $ */

"use strict";
(function() {
  
  // let imgs;
  let index;
  let slideInterval;
  
  let slides = [{"path":"..\/slideshow\/Laser engraver.jpg","name":"Laser engraver"},{"path":"..\/slideshow\/students at printing laptop.jpg","name":"students at printing laptop"},{"path":"..\/slideshow\/3D-Box.jpg","name":"3D Box"},{"path":"..\/slideshow\/Student-sanding-frame.jpg","name":"Student sanding frame"},{"path":"..\/slideshow\/Student using lathe.jpg","name":"Student using lathe"},{"path":"..\/slideshow\/Chess board being engraved.jpg","name":"Chess board being engraved"},{"path":"..\/slideshow\/student using crayon on lathe.jpg","name":"student using crayon on lathe"},{"path":"..\/slideshow\/computer lab.jpg","name":"computer lab"},{"path":"..\/slideshow\/Student using sketchup.jpg","name":"Student using sketchup"},{"path":"..\/slideshow\/Student using Illustrator.jpg","name":"Student using Illustrator"},{"path":"..\/slideshow\/3D-printer and laser engraver.jpg","name":"3D printer and laser engraver"},{"path":"..\/slideshow\/Student-working-at-computer.jpg","name":"Student working at computer"},{"path":"..\/slideshow\/Smartboard-in-class.jpg","name":"Smartboard in class"}];

  window.addEventListener("load", function() {
    index = 0;
    getImgs();
    
    $("l-arrow").onclick = function() { 
      playPause(); // to reset interval to not rush ahead
      playPause();
      changeSlide(-1);
    };
    $("l-arrow").addEventListener('keydown', function(event) { // For tab+enter accessibility
      if (event.which == 13) {
          event.preventDefault();
          $("l-arrow").onclick();
      }
    });
    $("r-arrow").onclick = function() { 
      playPause(); // ditto
      playPause();
      changeSlide(1);
    };
    $("r-arrow").addEventListener('keydown', function(event) { // double ditto
      if (event.which == 13) {
          event.preventDefault();
          $("r-arrow").onclick();
      }
    });
    $("play-pause").onclick = playPause;
    $("play-pause").addEventListener('keydown', function(event) {
      if (event.which == 13) {
          event.preventDefault();
          $("play-pause").onclick();
      }
    });
  });
  
  function getImgs() {
    /*
    fetch("../get_slides.php")
      .then(checkStatus)
      .then(console.log)
      .then(JSON.parse)
      .then(populateShow)
      .catch(console.log);
    */
    populateShow(slides);
  }
  
  function populateShow(response) {
    for (let i = 0; i < response.length; i++) {
      let li = document.createElement("li");
      li.classList.add("slide");
      let img = document.createElement("img");
      img.src = response[i].path;
      img.alt = response[i].name;
      li.appendChild(img);
      $("slides").appendChild(li);
    }
    playPause();
  }
  
  function changeSlide(dir) {
    let slides = $("slides").querySelectorAll("li");
    slides[index].classList.remove("showing");
    index = (index + dir) % slides.length;
    if (index < 0) {
      index = slides.length - 1;
    }
    slides[index].classList.add("showing");
  }
  
  function playPause() {
    if ($("play-pause").classList.contains("fa-play")) {
      slideInterval = setInterval(function() { changeSlide(1) }, 5000);
      $("play-pause").classList.remove("fa-play");
      $("play-pause").classList.add("fa-pause");
    } else {
      $("play-pause").classList.remove("fa-pause");
      $("play-pause").classList.add("fa-play");
      clearInterval(slideInterval);
    }
  }
  
  
})();