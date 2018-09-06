/*

*/

/* global fetch */
/* global checkStatus */
/* global $ */

"use strict";
(function() {
  
  let imgData;
  let currShowcase;
  
  window.addEventListener("load", function() {
    initialize();
    
    $("close-btn").onclick = closeItem;
    document.querySelector("main").addEventListener('click', closeItem, true);
  });
  
  function openItem() {
    $("prod-img").src = imgData[this.id].path;
    $("prod-title").innerText = imgData[this.id].name;
    $("prod-desc").innerText = imgData[this.id].desc;
    
    document.querySelector(".item-view").classList.add("item-visible");
  }
  
  function closeItem() {
    document.querySelector(".item-view").classList.remove("item-visible");
  }
  
  function initialize() {
    let showcases = document.querySelectorAll(".showcase");
    for (let i = 0; i < showcases.length; i++) {
      currShowcase = showcases[i];
      fetch("showcase.php?dir=" + currShowcase.id, {credentials: 'include'})
        .then(checkStatus)
        .then(JSON.parse)
        .then(populateProjs)
        .catch(console.log)
    }
  }
  
  function populateProjs(response) {
    imgData = response;
    let rowsNeeded = Math.max(1, Math.ceil(imgData.length / 4));
    for (let i = 0; i < rowsNeeded; i++) {
      let row = document.createElement("div");
      row.classList.add("sc-row");
      let itemsInRow = 4;
      if (rowsNeeded == 1) {
        itemsInRow = imgData.length;
      } else if (i == rowsNeeded - 1) { 
        itemsInRow = imgData.length % (4 * i); 
      }
      for (let j = 0; j < itemsInRow; j++) {
        let item = document.createElement("div");
        item.classList.add("sc-item");
        let img = document.createElement("img");
        img.src = imgData[i*4 + j].path;
        img.alt = imgData[i*4 + j].name;
        let textDiv = document.createElement("div");
        textDiv.classList.add("proj-name");
        let text = document.createElement("p");
        text.innerText = imgData[i*4 + j].name;
        textDiv.appendChild(text);
        item.appendChild(img);
        item.appendChild(textDiv);
        item.id = (i*4 + j);
        row.appendChild(item);
      }
      currShowcase.appendChild(row);
    }
    makeClickable();
  }
  
  function makeClickable() {
    let items = document.querySelectorAll(".sc-item");
    for (let i = 0; i < items.length; i++) {
      // items[i].addEventListener('click', openItem, true); // Don't need contextual menu after all
    }
  }
  
  
})();