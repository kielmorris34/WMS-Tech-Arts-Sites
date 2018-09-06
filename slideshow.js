/*

*/

/* global fetch */
/* global checkStatus */
/* global $ */

"use strict";
(function() {
  
  let imgs;
  let index;
  let slideInterval;
  
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
    fetch("../get_slides.php", {credentials: 'include'})
      .then(checkStatus)
      //.then(function(response) { console.log(response)})
      .then(JSON.parse)
      .then(populateShow)
      .catch(console.log);
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