"use strict";
const btn = document.querySelector("#btn");
const bgColor = document.querySelector("#bg-color");
const main = document.querySelector("main");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getRandomNum = () => Math.floor(Math.random() * hex.length);

btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNum()];
  }
  bgColor.textContent = hexColor;
  main.style.backgroundColor = hexColor;
});
