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
  
  let slides = [
                  {
                  name: "../slideshow/student using crayon on lathe.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Student using lathe.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Student-working-at-computer.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Smartboard-in-class.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Chess board being engraved.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Student using sketchup.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/students at printing laptop.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Student using Illustrator.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Student-sanding-frame.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/3D-printer and laser engraver.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/Laser engraver.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/computer lab.jpg",
                  info: "no information found"
                  },
                  {
                  name: "../slideshow/3D-Box.jpg",
                  info: "no information found"
                  }
                ];

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
      img.src = response[i].name;
      img.alt = response[i].info;
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