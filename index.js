function myFunction() {

var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDicaSource1 = "images/" + "dice" + randomNumber1 + ".png";
var randomDicaSource2 = "images/" + "dice" + randomNumber2 + ".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDicaSource1);
var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDicaSource2);


if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "PK Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Amber Wins! 🚩";
}

}

document.getElementById("onlyButton").addEventListener("click", myFunction);
