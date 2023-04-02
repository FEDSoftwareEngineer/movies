import spiderman from "./Images/spidermanHero.webp";
import drstrange from "./Images/drstrangeHero.webp";
import matrix from "./Images/matrixHero.webp";
import it from "./Images/itHero.webp";
import thepredator from "./Images/thepredatorHero.webp";
import beanholiday from "./Images/beanholidayHero.webp";
import deadsilence from "./Images/deadsilenceHero.webp";
import shrek from "./Images/shrekHero.webp";
import deadpool from "./Images/deadpoolHero.webp";
import whitechicks from "./Images/whitechicksHero.webp";

//low quality
import LQwhitechicks from "./Images/lowq/LQwhitechicksHero.webp";
import LQdeadpool from "./Images/lowq/LQdeadpoolHero.webp";
import LQbeanholiday from "./Images/lowq/LQbeanholidayHero.webp";
import LQdeadsilence from "./Images/lowq/LQdeadsilenceHero.webp";
import LQmatrix from "./Images/lowq/LQmatrixHero.webp";
import LQdrstrange from "./Images/lowq/LQdrstrangeHero.webp";
import LQspiderman from "./Images/lowq/LQspidermanHero.webp";
import LQit from "./Images/lowq/LQitHero.webp";
import LQthepredator from "./Images/lowq/LQthepredatorHero.webp";
import LQshrek from "./Images/lowq/LQshrekHero.webp";
const data = [
  {
    featured: true,
    LQimg: LQit,
    img: it,
    title: "IT",
    type: "Horror, Adventure",
    rated: "PG-13 rated",
    time: "2hr 17min",
  },
  {
    featured: false,
    LQimg: LQdeadsilence,
    img: deadsilence,
    title: "Dead Silence",
    type: "Horror",
    rated: "PG-13 rated",
    time: "2hr 14min",
  },
  {
    featured: true,
    LQimg: LQdrstrange,
    img: drstrange,
    title: "Dr Strange",
    type: "Action, Adventure, Hero",
    rated: "G rated",
    time: "1hr 57min",
  },
  {
    featured: false,
    LQimg: LQbeanholiday,
    img: beanholiday,
    title: "Mr Bean's Holiday",
    type: "Comedey, Adventure",
    rated: "G rated",
    time: "1hr 24min",
  },
  {
    featured: true,
    LQimg: LQthepredator,
    img: thepredator,
    title: "the Predator",
    type: "Sci Fi, Action, Horror",
    rated: "PG rated",
    time: "2hr 11min",
  },
  {
    featured: true,
    LQimg: LQdeadpool,
    img: deadpool,
    title: "Deadpool",
    type: "Comedey, Action, Adventure, Hero",
    rated: "PG rated",
    time: "2hr 44min",
  },
  {
    featured: true,
    LQimg: LQspiderman,
    img: spiderman,
    title: "Spiderman",
    type: "Action, Adventure, Hero",
    rated: "PG rated",
    time: "2hr 37min",
  },

  {
    featured: false,
    LQimg: LQmatrix,
    img: matrix,
    title: "Matrix",
    type: "Action, Adventure, Hero",
    rated: "PG-13 rated",
    time: "1hr 44min",
  },
  {
    featured: false,
    LQimg: LQshrek,
    img: shrek,
    title: "Shrek",
    type: "Comedey, Action, Adventure, Hero",
    rated: "G rated",
    time: "1hr 41min",
  },

  {
    featured: false,

    LQimg: LQwhitechicks,
    img: whitechicks,
    title: "White Chicks",
    type: "Comedey",
    rated: "G rated",
    time: "1hr 55min",
  },
];

export default data;
