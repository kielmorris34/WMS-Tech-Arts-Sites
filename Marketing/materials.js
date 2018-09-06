/*

*/

/* global fetch */

// Global functions provided by index.js
/* global checkStatus */
/* global $ */

"use strict";
(function() {
  
  window.addEventListener("load", function() {
    $("search").oninput = function() {
      getMats("mat&search=" + $("search").value);
    };
    getMats("all");
  });
  
  function getMats(query) {
    let url = "materials.php?mode=" + query;
    fetch(url, {credentials: 'include'})
      .then(checkStatus)
      .then(JSON.parse)
      .then(fillTable)
      .catch(console.log);
  }
  
  function fillTable(json) {
    // Clear table excluding header rows
    let curLen = $("mat-table").children.length;
    for (let i = curLen - 1; i > 1; i--) {
      $("mat-table").removeChild($("mat-table").children[i]);
    }
    
    for (let i = 0; i < json.length; i++) {
      let row = document.createElement("p");
      row.classList.add("row");
      
      let spans = ["mat", "power", "speed", "vPower", "speed", "freq"];
      for (let j = 0; j < spans.length; j++) {
        let span = document.createElement("span");
        span.classList.add(spans[j]);
        if (json[i].length > j) {
          span.innerText = json[i][j];
        } else {
          span.innerText = " ";
        }
        row.appendChild(span);
      }
      $("mat-table").appendChild(row);
    }
  }
})();