/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  var cards = document.getElementsByClassName("card");
  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  var randomIndex = Math.floor(Math.random() * cards.length);
  cards[randomIndex].style.display = "block";

  document.getElementById("flipCard").addEventListener("click", function() {
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
    }
    randomIndex = Math.floor(Math.random() * cards.length);
    cards[randomIndex].style.display = "block";
  });
};
