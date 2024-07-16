import { generateImgSrc } from "../js_module/generateImgSrc.js";
import { createImgData } from "../js_module/createImgData.js";
import { createAndAppendImg } from "../js_module/createAppendImg.js";
import { combinedArray } from "../js_module/menuMatchEng.js";
import { imgSrc } from "../data/imgSrc.js";
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
    human.querySelector("img").src = generateImgSrc("human")[0];
  }
  // title에 1이 포함되어 있으면 human 이미지를 happy로 변경
  else if (title.includes("1")) {
    human.querySelector("img").src = generateImgSrc("human")[1];
  }
}, 5000); // 5초 후에 실행
// 서버에 fetch 요청을 보내서 DB의 active 테이블에서 값을 조회하고, 그 값을 console.log에 출력하는 함수
async function fetchActiveData() {
  try {
    const response = await fetch("/cafeData");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { nameOne, nameTwo, nameThree } = data;
    console.log("메뉴 : ", nameOne, nameTwo, nameThree);
    appendImg(nameOne);
    appendImg(nameTwo);
    appendImg(nameThree);
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
fetchActiveData();
//전송받을 한글 데이터와 영어 데이터를 매칭시켜 변환시켜주는 함수

// 메뉴 이름에 따라 이미지 소스를 반환하는 함수
function generateImgSrcByMenuName(menuName) {
  let result = "";
  combinedArray.forEach((pair) => {
    // 여기서 pair는 combinedArray의 각 요소, 즉 ["고등어 구이", "fish"]와 같은 배열을 의미
    const [nameKor, nameEng] = pair; // 이중 배열의 첫 번째 값과 두 번째 값을 각각 nameKor와 nameEng에 할당
    // 일치하는 경우 result에 해당 배열의 두 번째 값을 저장
    if (nameKor === menuName) {
      result = nameEng;
      console.log(result);
      //result 값을 반환
    }
  });
  return result;
}
console.log(generateImgSrcByMenuName("떡"));
// console.log(combinedArray);
// console.log(imgSrc);
//imgSrc 배열을 이용한 mealOne, Two, Three, Four, Five의 키만 가진 배열 생성
const foodImgArr = imgSrc.filter((element) => {
  return element[0].includes("meal");
});

function appendImg(menuName) {
  const engName = generateImgSrcByMenuName(menuName);
  //배열 메서드를 통해 engName이 포함되어 있는 객체의 key 값과 해당 engName 반환,
  //또한 객체의 key값을 배열에서 제거한다.
  for (let i = 0; i < foodImgArr.length; i++) {
    const keys = Object.keys(foodImgArr[i][1]);
    if (keys.includes(engName)) {
      const parentDiv = document.getElementById(foodImgArr[i][0]);
      const imgSrc = generateImgSrc(engName);
      createAndAppendImg(imgSrc, parentDiv, "");
      break;
    }
  }
}
console.log(foodImgArr);
console.log(appendImg("떡"));
