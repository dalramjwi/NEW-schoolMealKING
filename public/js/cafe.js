import { generateImgSrc } from "../js_module/generateImgSrc.js";
import { createImgData } from "../js_module/createImgData.js";
import { createAndAppendImg } from "../js_module/createAppendImg.js";
// div id, 변수 할당
const root = document.getElementById("root");
const line = document.getElementById("line");
const show = document.getElementById("show");
const human = document.getElementById("human");
const food = document.getElementById("food");
const mealOne = document.getElementById("mealOne");
const mealTwo = document.getElementById("mealTwo");
const mealThree = document.getElementById("mealThree");
const mealFour = document.getElementById("mealFour");
const mealFive = document.getElementById("mealFive");
//기본 img 설정
createImgData().forEach(({ src, parent, alt }) => {
  createAndAppendImg(src, parent, alt);
});
