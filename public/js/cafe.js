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
let turnArr = "";
console.log(turnArr);
//기본 img 설정
createImgData().forEach(({ src, parent, alt }) => {
  createAndAppendImg(src, parent, alt);
});
// setTimeout을 사용하여 title을 체크하고 이미지 변경하기
setTimeout(() => {
  const title = document.title;
  // title에 0이 포함되어 있으면 human 이미지를 sad로 변경
  if (title.includes("0")) {
    human.querySelector("img").src = generateImgSrc("human")[2];
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
    // 조회한 turn값
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const { nameOne, nameTwo, nameThree } = data.row;
    const turn = data.currentTurn;
    turnArr = turn;
    appendImg(nameOne);
    appendImg(nameTwo);
    appendImg(nameThree);

    // `turn` 값에 따라 dayOne ~ dayFive 이미지를 동적으로 삽입
    for (let i = 1; i <= 5; i++) {
      if (turn == i) {
        createAndAppendImg(generateImgSrc(`day${i}`), show, "day");
        break; // `turn` 값이 1~5 범위에서 하나만 해당되므로, 조건이 맞으면 루프 종료
      }
    }
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
      //result 값을 반환
    }
  });
  return result;
}
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
      foodImgArr.splice(i, 1);
      break;
    }
  }
}
//조건문 작성 => tilte 감지해서 3이면 이벤트로, 5이면 종료로 연결
setTimeout(() => {
  // 1. POST 요청을 보내는 부분
  //
  //active db의 row를 조회해서, 혹은 turn을 조회해서 3이하이면 return 주소 보내고
  //3이면 호감도 확인 페이지 (이벤트 2개 : db 조회해서 hpoint 일정 수준 이상이면 page1, 이하면 page2, 그 후 setTimeout)
  //4면 랜덤페이지 출현, 그 후 effect 주기:
  let key = "";
  if (turnArr == "3") {
    //호감도 확인 페이지 전송
    key = "hpointCheck";
  } else if (turnArr == "4") {
    //랜덤 페이지 출현
    key = "randomPage";
  } else if (turnArr == "5") {
    //마지막 페이지
    key = "end";
  } else {
    key = "repeat";
  }

  fetch("/return", {
    method: "POST", // POST 요청
    headers: {
      "Content-Type": "application/json", // JSON 데이터 전송
    },
    body: JSON.stringify({ key: key }), // 요청 본문, JSON 형식
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("res 전송 오류");
      }
      return response.text();
    })
    .then((html) => {
      if (key === "repeat") {
        window.location.href = "/menu";
      } else {
        document.open();
        document.write(html); // HTML을 현재 문서로 작성
        document.close();
      }
    })
    .catch((error) => {
      console.error("fetch 오류 발생", error);
    });
}, 8000);
