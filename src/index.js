import styles from "./styles.css";

import menuCard from "./templates/menu-cards.hbs";
import menuData from "./menu.json";

const menu = document.querySelector("ul.js-menu");
console.log(menu);

const cardsMarkup = menuCard(menuData);

menu.insertAdjacentHTML("beforeend", cardsMarkup);

function createCardsMarkup(menuData) {
  return menuCard(menuData);
}

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const toggle = document.querySelector("#theme-switch-toggle");

toggle.addEventListener("change", themeSwitch);
toggle.addEventListener("change", setTheme);
document.addEventListener("DOMContentLoaded", saveThemeValue);

function themeSwitch() {
  const toggleValue = toggle.checked;

  if (toggleValue) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
  }
}

function setTheme() {
  const toggleValue = toggle.checked;
  //   console.log(toggleValue);
  if (toggleValue) {
    localStorage.setItem("theme", Theme.DARK);
  } else {
    localStorage.setItem("theme", Theme.LIGHT);
  }
}

function saveThemeValue() {
  const currentTheme = localStorage.getItem("theme");
  console.log(currentTheme);
  if (currentTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);

    toggle.checked = true;
  }
}
