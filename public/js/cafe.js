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
// setTimeout을 사용하여 title을 체크하고 이미지 변경하기
setTimeout(() => {
  const title = document.title;

  // title에 0이 포함되어 있으면 human 이미지를 sad로 변경
  if (title.includes("0")) {
    human.querySelector("img").src = generateImgSrc("human")[1];
  }
  // title에 1이 포함되어 있으면 human 이미지를 happy로 변경
  else if (title.includes("1")) {
    human.querySelector("img").src = generateImgSrc("human")[2];
  }
}, 5000); // 5초 후에 실행
