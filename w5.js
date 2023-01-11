"use strict";
const btnObj = document.getElementsByTagName("button");

function getTime() {
  const time = new Date();
  document.getElementById("time").innerHTML = time.toLocaleTimeString();
}
btnObj[0].addEventListener("click", getTime);

function getDate() {
  const date = new Date();
  document.getElementById("date").innerHTML = date.toLocaleDateString();
}
btnObj[0].addEventListener("click", getDate);
