/*
  
*/

function $(id) {
  return document.getElementById(id);
}

function checkStatus(response) { 
  if (response.status >= 200 && response.status < 300) { 
    return response.text();
  } else { 
    return Promise.reject(new Error(response.status + ": " + response.statusText)); 
  } 
} 

"use strict";
(function() {
  
  let activeDrop;
  
  let titleColor;
  let backShift;
  
  window.addEventListener("load", function() {
    document.querySelector(":not(#nav)").addEventListener('click',closeDrops,true)
    let dropdowns = document.querySelectorAll("#nav > li");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].querySelectorAll(".dropdown").length == 1) {
        dropdowns[i].addEventListener('click',toggleDrop,false);
        dropdowns[i].addEventListener('keydown', function(event) {
          if (event.which == 13) {
            event.preventDefault();
            dropdowns[i].click();
          }
        }, true);
      }
    }
    $("hamburger").onclick = toggleNav;
    $("hamburger").addEventListener('keydown', function(event) {
      if (event.which == 13) {
        event.preventDefault();
        $("hamburger").onclick();
      }
    });
    
    function toggleNav() {
      let items = document.querySelectorAll("#nav li:not(:first-child)");
      for (let i = 0; i < items.length; i++) {
        if (items[i].style.display === "block") {
          items[i].style.display = "none";
        } else {
          items[i].style.display = "block"
        }
      }
    }
    
    // FUN THINGS
    
    // Random color with bools specifying if each is currently increasing or decreasing
    // titleColor = [rInt(256), rInt(256), rInt(256), true, true, true];
    // setInterval(colorify, 16); // roughly 60 FPS                 
    
    backShift = 0.0;
    setInterval(shift, 16);
  });
  
  function toggleDrop() {
    console.log(activeDrop);
    let drop = this.querySelector(".dropdown");
    if (drop != activeDrop) {
      this.querySelector(".dropdown").classList.add("expand");
    } else {
      activeDrop = null;
    }
  }
  
  function closeDrops() {
    let dropdowns = document.querySelectorAll("#nav > li");
    for (let i = 0; i < dropdowns.length; i++) {
      let drpdn = dropdowns[i].querySelectorAll(".dropdown");
      if (drpdn.length == 1 && drpdn[0].classList.contains("expand")) {
        activeDrop = drpdn[0];
        drpdn[0].classList.remove("expand");
      }
    }
  }
  
  // Just for fun :D
  
  function colorify() {
    for (let i = 0; i < titleColor.length / 2; i++) {
      if (titleColor[i + 3]) {
        titleColor[i] += rInt(3);
      } else {
        titleColor[i] -= rInt(3);
      }
      if (titleColor[i] > 255) {
        titleColor[i] = 255;
        titleColor[i + 3] = !titleColor[i + 3];
      } else if (titleColor[i] < 0) {
        titleColor[i] = 0;
        titleColor[i + 3] = !titleColor[i + 3];
      }
    }
    $("title").style.color = "rgb(" + titleColor[0] + "," + 
                                      titleColor[1] + "," + titleColor[2];
  }
  
  // Gets random number from 0 (inclusive) to max (non-inclusive)
  function rInt(max) {
    return parseInt(Math.random() * max);
  }
  
  function shift() {
    backShift += .03;
    if (backShift >= 100) {
      backShift = 0;
    }
    document.getElementsByTagName("body")[0].style.backgroundPosition = backShift + "% " + backShift + "%";
  }
  
})();