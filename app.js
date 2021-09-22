"use strict";

const board = document.querySelector("#board");

const colors = ["#DC143C", "#00FF00", "#FF1493", "#0000FF", "#4B0082"];

const squaresNumber = 500;

const getRandomColor = () => {
  const i = Math.floor(Math.random() * colors.length);
  return colors[i];
};

const setColor = (element) => {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color},  0 0 10px ${color}`;
};
const removeColor = (element) => {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
};

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));
  board.append(square);
}
