import { imgSrc } from "../data/imgSrc.js";
import { DataConverter } from "../js_module/DataConverter.js";
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

const converter = new DataConverter(imgSrc);
//converter는 div id에 해당하는 img 제목을 가진 객체
console.log(converter);
// generateImgSrc 함수 정의
function generateImgSrc(divId) {
  if (converter.convertedData[divId]) {
    const value = converter.convertedData[divId];
    if (typeof value === "object") {
      const imgSrcPaths = [];
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          imgSrcPaths.push(`./public/img/${value[key]}.png`);
        }
      }
      return imgSrcPaths;
    } else if (typeof value === "string") {
      return [`./public/img/${value}.png`];
    }
  }
}
console.log(generateImgSrc("mealFive"));

const humanBaseImgSrc = generateImgSrc("human")[0];
const humanImg = document.createElement("img");
humanImg.src = humanBaseImgSrc;
humanImg.alt = "Human Base Image";
human.appendChild(humanImg);
const foodBaseImg = generateImgSrc("food");
const foodImg = document.createElement("img");
foodImg.src = foodBaseImg;
food.appendChild(foodImg);
const showBaseImg = generateImgSrc("show");
const showImg = document.createElement("img");
showImg.src = showBaseImg;
show.appendChild(showImg);
