import { imgSrc } from "../data/imgSrc.js";
//div id, 변수 할당
const root = document.getElementById("root");
const line = document.getElementById("line");
const human = document.getElementById("human");
const food = document.getElementById("food");
const mealOne = document.getElementById("mealOne");
const mealTwo = document.getElementById("mealTwo");
const mealThree = document.getElementById("mealThree");
const mealFour = document.getElementById("mealFour");
const mealFive = document.getElementById("mealFive");
class DataConverter {
  constructor(data) {
    this.convertedData = {};

    data.forEach((item) => {
      const key = item[0];
      const value = item[1];

      if (typeof value === "object") {
        this.convertedData[key] = { ...value };
        // 객체일 경우 스프레드 연산자로 복사
      } else {
        this.convertedData[key] = value;
        // 이외 - 문자열일 경우 그대로 저장
      }
    });
  }
}

const converter = new DataConverter(imgSrc);
console.log(converter.convertedData);
