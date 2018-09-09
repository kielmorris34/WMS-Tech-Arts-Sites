/*

*/

/* global fetch */

// Global functions provided by index.js
/* global checkStatus */
/* global $ */

"use strict";
(function() {
  
  let mats = [["Wood (1/8\")","100","50","4","100","20"],["Wood (1/4\")","100","50","15","100","20"],["Acrylic","100","30","8","100","100"],["Alumuamark","100","20"],["Anadized Aluminum","100","30"],["Painted Brass","100","20"],["Mirror","30","100"],["Glass","60","100"],["Mirrored Acrylic","100","30"],["Corian / Avonite (1/8\")","45","100","50","80","100"],["Laserable Plastic","100","30","30","85","100"],["Leather (1/8\")","100","20","25","100","50"],["Marble","30","100"],["Cork","100","50","100","65","20"],["Stone / Rock","30","100"],["Metal (w/ Cermark Coating)","50","100"],["Rubber Phone Case","100","40"],["Balsa Wood","4","100","100"],["Bone","30","100"],["Foam","100","30","100","100","50"],["Transparency Plastic Film","","","100","60","100"],["River Stone (Smooth Stone)","30","100"],["Leggings","100","20"],["Basswood (1/8\")","100","60","10","100","20"],["Maple (Wood) (1/8\")","100","80","4","100","20"],["Purple Heart (Wood) (1/8\")","100","100","4","100","20"],["Soft Leather","100","70"],["Thin Wood Stock Book Mark Material","100","40","80","100","18"],["Decals","100","70","20"],["Packing Foam (1\")","5","100","100"],["Foam (3/4\")","65","90","5"],["ABS Plastic (Painted)","100","40"],["Patine Paint (On Metal)","100","40"],["Business Card Cardstock","100","40","100","80","80"],["Duron","100","60","4","100","18"],["\"Scratch Paper\" Black on White","100","25","100","90","20"],["White Board","100","100","5","100","20"],["Maple / Mahogany Plywood","100","50","8","100","18"],["Foam Sticky Back","100","13","40","100","50"],["Felt","90","12","70","15","50"],["Foam BackBoard","100","50","50","100","20"],["Denim","100","30","100","20","50"],["Econowood (1/4\")","80","100","4","100","20"],["Mousepads","100","12"],["Cardboard","100","40","50","100","20"],["Particle Board w/ Laminate","80","100"],["Finished Alder / Cherry (Wood) (1/8\")","10","100","20"],["Two Color Cardstock","100","60","20","100","20"],["Clip Board","100","50"],["Rubber Stanp Material","25","100"],["Countertop Material","","","2","100","50"],["Inverse Wood Block","10","100"]];
  let results = [];
  
  window.addEventListener("load", function() {
    $("search").oninput = function() {
      //getMats("mat&search=" + $("search").value); // php
      getMats($("search").value);
    };
    //getMats("all"); // php
    getMats("");
  });
  
  function getMats(query) {
    /* php way 
    let url = "../materials.php?mode=" + query;
    fetch(url)
      .then(checkStatus)
      .then(JSON.parse)
      .then(fillTable)
      .catch(console.log);
    */
    if (query === "") {
      results = mats;
    } else {
      results = [];
      for (let i = 0; i < mats.length; i++) {
        if (mats[i][0].toLowerCase().includes(query.toLowerCase())) {
          results.push(mats[i]);
        }
      }
    }
    fillTable(results);
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