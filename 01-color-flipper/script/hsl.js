"use strict";
const btn = document.querySelector("#btn");
const bgColor = document.querySelector("#bg-color");
const main = document.querySelector("main");

function randomBg() {
  let hue = Math.floor(Math.random() * 360);
  let saturation = (Math.random() * 100 + 1).toFixed(2);
  let lightness = (Math.random() * 100).toFixed(2);
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

btn.addEventListener("click", () => {
  main.style.background = randomBg();
  bgColor.innerHTML = randomBg();
});
