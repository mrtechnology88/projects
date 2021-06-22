"use strict";

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
  count++;
  countEl.textContent = count;
}

function save() {
  let message = count + " -";
  saveEl.textContent += message;
  countEl.textContent = 0;
  count = 0;
}
