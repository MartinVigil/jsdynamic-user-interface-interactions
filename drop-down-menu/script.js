import { menuActions } from "./menu.js";

const displayMenuBtn = document.querySelector(".display-menu-btn");
const menuContainer = document.querySelector(".menu-container");
const hideMenuBtn = document.querySelector(".hide-menu-btn");

menuActions(displayMenuBtn, hideMenuBtn, menuContainer);