import "../styles/index.css";
import "../styles/normalize.css";

import { aboutPage } from "./about.js";
import { menuPage } from "./menu.js";
import { homePage } from "./home.js";

homePage();

function clearContent() {
  document.getElementById("content").innerHTML = "";
}

let home = document.querySelector("#homeBtn");
home.addEventListener("click", () => {
  clearContent();
  homePage();
});

let menu = document.querySelector("#menuBtn");
menu.addEventListener("click", () => {
  clearContent();
  menuPage();
});

let about = document.querySelector("#aboutBtn");
about.addEventListener("click", () => {
  clearContent();
  aboutPage();
});
