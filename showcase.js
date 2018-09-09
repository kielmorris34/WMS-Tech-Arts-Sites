/*

*/

/* global fetch */
/* global checkStatus */
/* global $ */

"use strict";
(function() {
  
  let imgData;
  let currShowcase;
  
  // no php way
  let scStrings = ["3D", "laser", "cnc", "uv", "wood", "products"];
  let threeD = [{path: "../imgs/3D/3D-Printed-Chess-Pieces.jpg",name: "3D Printed Chess Pieces"},{path: "../imgs/3D/Attorney-Card-Holder.jpg",name: "Attorney Card Holder"},{path: "../imgs/3D/Business-Card-Holder.jpg",name: "Business Card Holder"},{path: "../imgs/3D/Card-And-Pencil-Holder.jpg",name: "Card And Pencil Holder"},{path: "../imgs/3D/Cat.jpg",name: "Cat"},{path: "../imgs/3D/Flower-&-Vase.jpg",name: "Flower & Vase"},{path: "../imgs/3D/Freeform-Box-2.jpg",name: "Freeform Box 2"},{path: "../imgs/3D/Freeform-Box-3.jpg",name: "Freeform Box 3"},{path: "../imgs/3D/Freeform-Box-Horse.jpg",name: "Freeform Box Horse"},{path: "../imgs/3D/Freeform-Box-with-Flower-Knobs.jpg",name: "Freeform Box with Flower Knobs"},{path: "../imgs/3D/Freeform-Box.jpg",name: "Freeform Box"},{path: "../imgs/3D/Freeform-J-Box.jpg",name: "Freeform J Box"},{path: "../imgs/3D/Freeform-S-Box.jpg",name: "Freeform S Box"},{path: "../imgs/3D/Halo-Warthog-Trophy.jpg",name: "Halo Warthog Trophy"},{path: "../imgs/3D/Jiffy-Lube-Card-Holder.jpg",name: "Jiffy Lube Card Holder"},{path: "../imgs/3D/Opened-Freeform-S-Box.jpg",name: "Opened Freeform S Box"},{path: "../imgs/3D/Painted-Business-Card-Holder-2.jpg",name: "Painted Business Card Holder 2"},{path: "../imgs/3D/Painted-Business-Card-Holder.jpg",name: "Painted Business Card Holder"},{path: "../imgs/3D/Painted-Freeform-Box.jpg",name: "Painted Freeform Box"},{path: "../imgs/3D/Phone-Amplifier-with-Wood-Base.jpg",name: "Phone Amplifier with Wood Base"},{path: "../imgs/3D/Phone-Ampliflier.jpg",name: "Phone Ampliflier"},{path: "../imgs/3D/Picket-Fence-Card-Holder.jpg",name: "Picket Fence Card Holder"},{path: "../imgs/3D/Posable Dino.jpg",name: "Posable Dino"},{path: "../imgs/3D/Posable.jpg",name: "Posable"},{path: "../imgs/3D/Sandal Earrings.jpg",name: "Sandal Earrings"},{path: "../imgs/3D/Seahawk-Coaster-Holder.jpg",name: "Seahawk Coaster Holder"},{path: "../imgs/3D/Skater.jpg",name: "Skater"},{path: "../imgs/3D/Toothpick-Holder.jpg",name: "Toothpick Holder"}];
  let laser = [{path: "../imgs/laser/Acrylic Earring Holder.jpg",name: "Acrylic Earring Holder"},{path: "../imgs/laser/Army Ping Pong Paddle.jpg",name: "Army Ping Pong Paddle"},{path: "../imgs/laser/Blackgammon Board.jpg",name: "Blackgammon Board"},{path: "../imgs/laser/Bulldog Pencil Holder.jpg",name: "Bulldog Pencil Holder"},{path: "../imgs/laser/Bulldogs Mirror & Foam Coaster.jpg",name: "Bulldogs Mirror & Foam Coaster"},{path: "../imgs/laser/Colored Engraved Bone Necklace.jpg",name: "Colored Engraved Bone Necklace"},{path: "../imgs/laser/Dancer Clock.jpg",name: "Dancer Clock"},{path: "../imgs/laser/Engraved Acrylic Clock.jpg",name: "Engraved Acrylic Clock"},{path: "../imgs/laser/Engraved Leggings.jpg",name: "Engraved Leggings"},{path: "../imgs/laser/Engraved Letter Necklaces.jpg",name: "Engraved Letter Necklaces"},{path: "../imgs/laser/Engraved Welcome Sign.jpg",name: "Engraved Welcome Sign"},{path: "../imgs/laser/Engraved Wine Glass.jpg",name: "Engraved Wine Glass"},{path: "../imgs/laser/Engraved Wood Picture.jpg",name: "Engraved Wood Picture"},{path: "../imgs/laser/Floral Engraved Wine Bottle 2.jpg",name: "Floral Engraved Wine Bottle 2"},{path: "../imgs/laser/Floral Engraved Wine Bottle.jpg",name: "Floral Engraved Wine Bottle"},{path: "../imgs/laser/Geo-Bowl 1.jpg",name: "Geo Bowl 1"},{path: "../imgs/laser/Geo-Bowl 2.jpg",name: "Geo Bowl 2"},{path: "../imgs/laser/Geo-Bowl 3.jpg",name: "Geo Bowl 3"},{path: "../imgs/laser/Geo-Bowl 5.jpg",name: "Geo Bowl 5"},{path: "../imgs/laser/Heart Picture Frame.jpg",name: "Heart Picture Frame"},{path: "../imgs/laser/Hungry Coaster.jpg",name: "Hungry Coaster"},{path: "../imgs/laser/I Heart You Necklace & Earrings.jpg",name: "I Heart You Necklace & Earrings"},{path: "../imgs/laser/Laser Cut Spray Painted Earrings.jpg",name: "Laser Cut Spray Painted Earrings"},{path: "../imgs/laser/Mirror & Foam Coaster.jpg",name: "Mirror & Foam Coaster"},{path: "../imgs/laser/Multi-Piece Earring.jpg",name: "Multi Piece Earring"},{path: "../imgs/laser/Patterned Chess Board.jpg",name: "Patterned Chess Board"},{path: "../imgs/laser/Ping Pong Paddle 2.jpg",name: "Ping Pong Paddle 2"},{path: "../imgs/laser/Ping Pong Paddle.jpg",name: "Ping Pong Paddle"},{path: "../imgs/laser/Purple Acrylic Clock.jpg",name: "Purple Acrylic Clock"},{path: "../imgs/laser/Radioactive Engraved Acrylic Box.jpg",name: "Radioactive Engraved Acrylic Box"},{path: "../imgs/laser/Redskins Glass Pane.jpg",name: "Redskins Glass Pane"},{path: "../imgs/laser/Saw Blade Clock.jpg",name: "Saw Blade Clock"},{path: "../imgs/laser/Seabrook Monopoly Board.jpg",name: "Seabrook Monopoly Board"},{path: "../imgs/laser/Seahawk Geo Bowl.jpg",name: "Seahawk Geo Bowl"},{path: "../imgs/laser/Seahawk Geo-Bowl.jpg",name: "Seahawk Geo Bowl"},{path: "../imgs/laser/Seahawk Mirror & Foam Coaster.jpg",name: "Seahawk Mirror & Foam Coaster"},{path: "../imgs/laser/Seahawk Mirror.jpg",name: "Seahawk Mirror"},{path: "../imgs/laser/Seahawk Pillow.jpg",name: "Seahawk Pillow"},{path: "../imgs/laser/Supersonics Chess Board.jpg",name: "Supersonics Chess Board"},{path: "../imgs/laser/WMS Change Bowl.jpg",name: "WMS Change Bowl"},{path: "../imgs/laser/WMS Engraved Paperweight.jpg",name: "WMS Engraved Paperweight"},{path: "../imgs/laser/WMS Yo-Yo.jpg",name: "WMS Yo Yo"},{path: "../imgs/laser/Wood Arch Clock.jpg",name: "Wood Arch Clock"},{path: "../imgs/laser/Wood Candle Box 2.jpg",name: "Wood Candle Box 2"},{path: "../imgs/laser/Wood Candle Box.jpg",name: "Wood Candle Box"},{path: "../imgs/laser/Wood Cutout Box.jpg",name: "Wood Cutout Box"},{path: "../imgs/laser/Wood Engraved Picture.jpg",name: "Wood Engraved Picture"},{path: "../imgs/laser/Wood Seahawk Clock.jpg",name: "Wood Seahawk Clock"},{path: "../imgs/laser/Wooden Coasters.jpg",name: "Wooden Coasters"},{path: "../imgs/laser/iPad Holder.jpg",name: "iPad Holder"}];
  let cnc = [{path: "../imgs/cnc/Ridgeline Storm Cribbiage Board.jpg",name: "Ridgeline Storm Cribbiage Board"},{path: "../imgs/cnc/Seahawk & Mariners Cribbage Boards.jpg",name: "Seahawk & Mariners Cribbage Boards"}];
  let uv = [{path: "../imgs/uv/Acrylic-Seahawk-Keychain.jpg",name: "Acrylic Seahawk Keychain"},{path: "../imgs/uv/Poem-Mirror-Frame.jpg",name: "Poem Mirror Frame"},{path: "../imgs/uv/Seahawk Phone Holder.jpg",name: "Seahawk Phone Holder"},{path: "../imgs/uv/Seahawk-Phone-Holder.jpg",name: "Seahawk Phone Holder"},{path: "../imgs/uv/Seawak-Keychains.jpg",name: "Seawak Keychains"}];
  let wood = [{path: "../imgs/wood/Bench.jpg",name: "Bench"},{path: "../imgs/wood/Freeform-Box.jpg",name: "Freeform Box"},{path: "../imgs/wood/Owl-Clock.jpg",name: "Owl Clock"},{path: "../imgs/wood/Phone-Amplifier.jpg",name: "Phone Amplifier"},{path: "../imgs/wood/Rolling Lid Container Open.jpg",name: "Rolling Lid Container Open"},{path: "../imgs/wood/Rolling Lid Container.jpg",name: "Rolling Lid Container"}];
  let products = [{path: "../imgs/products/12th Man Earrings 2.jpg",name: "12th Man Earrings 2"},{path: "../imgs/products/12th Man Earrings 3.jpg",name: "12th Man Earrings 3"},{path: "../imgs/products/12th Man Earrings 4.jpg",name: "12th Man Earrings 4"},{path: "../imgs/products/12th Man Earrings.jpg",name: "12th Man Earrings"},{path: "../imgs/products/12th Man Phone Stand.jpg",name: "12th Man Phone Stand"},{path: "../imgs/products/12th Man Ping Pong Paddle.jpg",name: "12th Man Ping Pong Paddle"},{path: "../imgs/products/3D Printed Cribbage Pegs 2.jpg",name: "3D Printed Cribbage Pegs 2"},{path: "../imgs/products/3D Printed Cribbage Pegs 3.jpg",name: "3D Printed Cribbage Pegs 3"},{path: "../imgs/products/3D Printed Cribbage Pegs 4.jpg",name: "3D Printed Cribbage Pegs 4"},{path: "../imgs/products/3D Printed Cribbage Pegs.jpg",name: "3D Printed Cribbage Pegs"},{path: "../imgs/products/4H Acrylic Earrings.jpg",name: "4H Acrylic Earrings"},{path: "../imgs/products/4h Wood Earrings.jpg",name: "4h Wood Earrings"},{path: "../imgs/products/Acrylic Chess Set.jpg",name: "Acrylic Chess Set"},{path: "../imgs/products/Acrylic Earrings.jpg",name: "Acrylic Earrings"},{path: "../imgs/products/Acrylic Fidget Spinner.jpg",name: "Acrylic Fidget Spinner"},{path: "../imgs/products/Acrylic Seahawk Earrings.jpg",name: "Acrylic Seahawk Earrings"},{path: "../imgs/products/Ballerina Clock 2.jpg",name: "Ballerina Clock 2"},{path: "../imgs/products/Ballerina Clock 3.jpg",name: "Ballerina Clock 3"},{path: "../imgs/products/Ballerina Clock 4.jpg",name: "Ballerina Clock 4"},{path: "../imgs/products/Ballerina Clock 5.jpg",name: "Ballerina Clock 5"},{path: "../imgs/products/Ballerina Clock.jpg",name: "Ballerina Clock"},{path: "../imgs/products/Ballerina Leap Pendant.jpg",name: "Ballerina Leap Pendant"},{path: "../imgs/products/Ballerina Pendant.jpg",name: "Ballerina Pendant"},{path: "../imgs/products/Ballet Northwest Pendant.jpg",name: "Ballet Northwest Pendant"},{path: "../imgs/products/Blue Engraved Earrings.jpg",name: "Blue Engraved Earrings"},{path: "../imgs/products/Bulldog Ping Pong Paddle.jpg",name: "Bulldog Ping Pong Paddle"},{path: "../imgs/products/Butterfly Clock.jpg",name: "Butterfly Clock"},{path: "../imgs/products/Capital Cougars Wood Earrings.jpg",name: "Capital Cougars Wood Earrings"},{path: "../imgs/products/Cougars Cribbage Board.jpg",name: "Cougars Cribbage Board"},{path: "../imgs/products/Cougars Phone Holder 2.jpg",name: "Cougars Phone Holder 2"},{path: "../imgs/products/Cougars Phone Holder.jpg",name: "Cougars Phone Holder"},{path: "../imgs/products/Cribbage Boards 2.jpg",name: "Cribbage Boards 2"},{path: "../imgs/products/Cribbage Boards.jpg",name: "Cribbage Boards"},{path: "../imgs/products/Cribbage Box.jpg",name: "Cribbage Box"},{path: "../imgs/products/Cutting Boards 1.jpg",name: "Cutting Boards 1"},{path: "../imgs/products/Cutting Boards 2.jpg",name: "Cutting Boards 2"},{path: "../imgs/products/Dallas Cowboys Cribbage Board.jpg",name: "Dallas Cowboys Cribbage Board"},{path: "../imgs/products/Dance Wooden Clock.jpg",name: "Dance Wooden Clock"},{path: "../imgs/products/Dark Seahawk Coasters.jpg",name: "Dark Seahawk Coasters"},{path: "../imgs/products/Dr Suess Fish Earrings.jpg",name: "Dr Suess Fish Earrings"},{path: "../imgs/products/Earring Set.jpg",name: "Earring Set"},{path: "../imgs/products/Engraved Cribbage Boards.jpg",name: "Engraved Cribbage Boards"},{path: "../imgs/products/Engraved Earrings.jpg",name: "Engraved Earrings"},{path: "../imgs/products/Engraved Mirror.jpg",name: "Engraved Mirror"},{path: "../imgs/products/Engraved Plaques.jpg",name: "Engraved Plaques"},{path: "../imgs/products/Engraved Wine Bottle.jpg",name: "Engraved Wine Bottle"},{path: "../imgs/products/Feather Earrings.jpg",name: "Feather Earrings"},{path: "../imgs/products/Flower Candle Box.jpg",name: "Flower Candle Box"},{path: "../imgs/products/Foam Seahawks & Packers Dart Board.jpg",name: "Foam Seahawks & Packers Dart Board"},{path: "../imgs/products/Framed Poem Mirror.jpg",name: "Framed Poem Mirror"},{path: "../imgs/products/Freeform S Box.jpg",name: "Freeform S Box"},{path: "../imgs/products/Heart Earrings.jpg",name: "Heart Earrings"},{path: "../imgs/products/Heart Outline Earrings.jpg",name: "Heart Outline Earrings"},{path: "../imgs/products/Husky Earrings 2.jpg",name: "Husky Earrings 2"},{path: "../imgs/products/Husky Print Phone Holder 2.jpg",name: "Husky Print Phone Holder 2"},{path: "../imgs/products/Husky Print Phone Holder.jpg",name: "Husky Print Phone Holder"},{path: "../imgs/products/Husky Wood Earrings.jpg",name: "Husky Wood Earrings"},{path: "../imgs/products/Illuminated Acrylic Table of Elements.jpg",name: "Illuminated Acrylic Table of Elements"},{path: "../imgs/products/Key Earrings.jpg",name: "Key Earrings"},{path: "../imgs/products/Leaf Earrings.jpg",name: "Leaf Earrings"},{path: "../imgs/products/Mariners Phone Holder 2.jpg",name: "Mariners Phone Holder 2"},{path: "../imgs/products/Mariners Phone Holder.jpg",name: "Mariners Phone Holder"},{path: "../imgs/products/Mickey Clock.jpg",name: "Mickey Clock"},{path: "../imgs/products/Mixed Wood Engraved Clipboard.jpg",name: "Mixed Wood Engraved Clipboard"},{path: "../imgs/products/Moustache Comb.jpg",name: "Moustache Comb"},{path: "../imgs/products/Mr. Morris Fidget Spinner.jpg",name: "Mr. Morris Fidget Spinner"},{path: "../imgs/products/Nickel Change Bowl.jpg",name: "Nickel Change Bowl"},{path: "../imgs/products/Oar Necklace.jpg",name: "Oar Necklace"},{path: "../imgs/products/Oly Bears Earrings.jpg",name: "Oly Bears Earrings"},{path: "../imgs/products/Olympia Bears Cribbage Board.jpg",name: "Olympia Bears Cribbage Board"},{path: "../imgs/products/Olympia Bears Earrings.jpg",name: "Olympia Bears Earrings"},{path: "../imgs/products/Ornament Coasters.jpg",name: "Ornament Coasters"},{path: "../imgs/products/Ping Pong Paddles.jpg",name: "Ping Pong Paddles"},{path: "../imgs/products/Printed Ballerina Pendant.jpg",name: "Printed Ballerina Pendant"},{path: "../imgs/products/Ridgeline Cutting Board.jpg",name: "Ridgeline Cutting Board"},{path: "../imgs/products/Ridgeline Cutting Boards.jpg",name: "Ridgeline Cutting Boards"},{path: "../imgs/products/Seahawk & Seattle Skyline Coaster Holder 2.jpg",name: "Seahawk & Seattle Skyline Coaster Holder 2"},{path: "../imgs/products/Seahawk & Seattle Skyline Coaster Holder 3.jpg",name: "Seahawk & Seattle Skyline Coaster Holder 3"},{path: "../imgs/products/Seahawk & Seattle Skyline Coaster Holder 4.jpg",name: "Seahawk & Seattle Skyline Coaster Holder 4"},{path: "../imgs/products/Seahawk & Seattle Skyline Coaster Holder.jpg",name: "Seahawk & Seattle Skyline Coaster Holder"},{path: "../imgs/products/Seahawk Earrings 2.jpg",name: "Seahawk Earrings 2"},{path: "../imgs/products/Seahawk Pillow 2.jpg",name: "Seahawk Pillow 2"},{path: "../imgs/products/Seahawk Pillow.jpg",name: "Seahawk Pillow"},{path: "../imgs/products/Seahawk Ping Pong Paddle.jpg",name: "Seahawk Ping Pong Paddle"},{path: "../imgs/products/Seahawks & Mariners Cribbage Boards.jpg",name: "Seahawks & Mariners Cribbage Boards"},{path: "../imgs/products/Seahawks Candle Box.jpg",name: "Seahawks Candle Box"},{path: "../imgs/products/Seahawks Cribbage Board.jpg",name: "Seahawks Cribbage Board"},{path: "../imgs/products/Seahawks Earrings.jpg",name: "Seahawks Earrings"},{path: "../imgs/products/Seahawks Fidget Spinner.jpg",name: "Seahawks Fidget Spinner"},{path: "../imgs/products/Seahawks Moustache Comb.jpg",name: "Seahawks Moustache Comb"},{path: "../imgs/products/Seattle Seahawk Acrylic Chess Set.jpg",name: "Seattle Seahawk Acrylic Chess Set"},{path: "../imgs/products/Seattle Seahawk Cribbage Board.jpg",name: "Seattle Seahawk Cribbage Board"},{path: "../imgs/products/Stache Me Moustache Comb.jpg",name: "Stache Me Moustache Comb"},{path: "../imgs/products/Supersonics Change Bowl.jpg",name: "Supersonics Change Bowl"},{path: "../imgs/products/Swan Pendant.jpg",name: "Swan Pendant"},{path: "../imgs/products/Tamis Seahawks Blocks.jpg",name: "Tamis Seahawks Blocks"},{path: "../imgs/products/Teacher Plaques & Stands.jpg",name: "Teacher Plaques & Stands"},{path: "../imgs/products/Teacher Plaques.jpg",name: "Teacher Plaques"},{path: "../imgs/products/Transparent Fidget Spinner.jpg",name: "Transparent Fidget Spinner"},{path: "../imgs/products/Turquiose Engraved Earrings.jpg",name: "Turquiose Engraved Earrings"},{path: "../imgs/products/WMS Cribbage Board.jpg",name: "WMS Cribbage Board"},{path: "../imgs/products/WMS Earring Rack 2.jpg",name: "WMS Earring Rack 2"},{path: "../imgs/products/WMS Earring Rack.jpg",name: "WMS Earring Rack"},{path: "../imgs/products/WMS Ping Pong Champion Paddle.jpg",name: "WMS Ping Pong Champion Paddle"},{path: "../imgs/products/WWU Necklace.jpg",name: "WWU Necklace"},{path: "../imgs/products/Wood Circle Earrings.jpg",name: "Wood Circle Earrings"},{path: "../imgs/products/Wood Earrings & Engraved Stone.jpg",name: "Wood Earrings & Engraved Stone"},{path: "../imgs/products/Wood Frame & Earrings.jpg",name: "Wood Frame & Earrings"},{path: "../imgs/products/Wooden Engraved Earrings.jpg",name: "Wooden Engraved Earrings"},{path: "../imgs/products/Wooden Nutcracker Pendant.jpg",name: "Wooden Nutcracker Pendant"},{path: "../imgs/products/Wooden Pens Circle.jpg",name: "Wooden Pens Circle"},{path: "../imgs/products/Wooden Pens.jpg",name: "Wooden Pens"},{path: "../imgs/products/Wooden Picture Frames.jpg",name: "Wooden Picture Frames"},{path: "../imgs/products/Wooden Plaques.jpg",name: "Wooden Plaques"},{path: "../imgs/products/Wooden Seahawk Phone Case.jpg",name: "Wooden Seahawk Phone Case"},{path: "../imgs/products/Wooden Teacher Plaques.jpg",name: "Wooden Teacher Plaques"},{path: "../imgs/products/iPad Holder.jpg",name: "iPad Holder"}];
  let jsons = [threeD, laser, cnc, uv, wood, products];
  
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
      /* php method
      fetch("../showcase.php?dir=" + currShowcase.id)
        .then(checkStatus)
        .then(JSON.parse)
        .then(populateProjs)
        .catch(console.log);
      */
      for (let j = 0; j < scStrings.length; j++) {
        if (currShowcase.id === scStrings[j]) {
          populateProjs(jsons[j]);
        }
      }
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