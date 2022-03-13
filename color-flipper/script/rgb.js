"use strict";
const btn = document.querySelector("#btn");
const bgColor = document.querySelector("#bg-color");
const main = document.querySelector("main");

function randomRgb() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click", () => {
  main.style.background = randomRgb();
  bgColor.innerHTML = randomRgb();
});
