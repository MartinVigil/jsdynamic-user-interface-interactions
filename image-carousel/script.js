import { arrowDisplacement, dotDisplacement } from "./carousel.js";

const carousel = document.querySelector(".carousel");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const dots = document.querySelectorAll(".dot")

arrowDisplacement(rightArrow,leftArrow,carousel,4)
dotDisplacement(dots,carousel);