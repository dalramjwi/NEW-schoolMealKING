import { imgSrc } from "../data/imgSrc.js";

// div id, 변수 할당
const root = document.getElementById("root");
const line = document.getElementById("line");
const human = document.getElementById("human");
const food = document.getElementById("food");
const mealOne = document.getElementById("mealOne");
const mealTwo = document.getElementById("mealTwo");
const mealThree = document.getElementById("mealThree");
const mealFour = document.getElementById("mealFour");
const mealFive = document.getElementById("mealFive");

// DataConverter 클래스 정의
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
// human div의 base 값 이미지 경로를 가져오기
const humanBaseImgSrc = generateImgSrc("human")[0]; // "human"의 base 값의 첫 번째 이미지 경로를 가져옴

// human div에 이미지 추가
const humanImg = document.createElement("img");
humanImg.src = humanBaseImgSrc; // base 이미지 경로를 src 속성에 설정
humanImg.alt = "Human Base Image"; // 이미지의 alt 속성 설정 (상황에 맞는 설명을 추가할 수 있음)
human.appendChild(humanImg); // human div에 img 태그를 추가