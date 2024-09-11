import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridTextSet } from "../js_module/gridTextSet.js";
import {
  checkboxEvent,
  updateMenu,
  selectedMenus,
} from "./../js_module/checkboxEvent.js";

// div id, 변수 할당
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const bLine = document.getElementById("bLine");
const btnForm = document.getElementById("btnForm");

// btn 만들기
let formData = ["./cafe", "POST", bLine];
let buttonData = ["submit", "진행하기"];
btnFormSet(formData, buttonData);

// menu 제목 삽입
const menuarr = ["한", "양", "후"];
const menuName = [];
for (let i = 0; i < 3; i++) {
  menuName.push(tagIdMaker("div", `${menuarr[i]}식`, `${menuarr[i]}식`));
}

// 실행 - 기본 component 생성
const app = () => {
  day.innerHTML = gridTextSet.daymap.join("");
  menu.innerHTML = menuName.join("") + gridTextSet.menumap.join("");
};
app();

// 기본 선택 가능 메뉴 수
let maxSelectableMenus = 3;

// 페이지 로드 시 손가락 이벤트 상태 확인
fetch("/check-finger-event")
  .then((response) => {
    console.log("finger 이벤트 상태 응답 수신:", response);
    return response.json();
  })
  .then((data) => {
    console.log("finger 이벤트 상태 데이터:", data);
    if (data.fingerEventOccurred) {
      maxSelectableMenus = 2; // finger 이벤트 발생 시 메뉴 선택 제한을 2로 설정
      console.log("메뉴 선택 제한이 2로 설정되었습니다.");
    }
  })
  .catch((error) => {
    console.error("서버와의 통신 오류:", error);
  });
console.log(maxSelectableMenus);

// 메뉴 선택 이벤트
menu.addEventListener("click", (event) => {
  const target = event.target;
  // 클릭한 요소가 체크박스일 경우에만 처리
  if (target.tagName === "INPUT" && target.type === "checkbox") {
    const isChecked = target.checked; // 체크 상태 확인
    const selectedCount = selectedMenus.length;

    if (isChecked) {
      // 체크박스를 체크하려는 경우
      if (selectedCount < maxSelectableMenus) {
        checkboxEvent(
          event,
          () => {
            updateMenu(7);
          },
          maxSelectableMenus
        );
      } else {
        alert("선택 가능한 메뉴는 최대 " + maxSelectableMenus + "개입니다.");
        event.preventDefault(); // 체크박스 체크 동작 취소
      }
    } else {
      // 체크박스를 해제하려는 경우
      checkboxEvent(
        event,
        () => {
          updateMenu(7);
        },
        maxSelectableMenus
      );
    }
  }
});

// bLine 클릭 시 선택된 메뉴 전송
bLine.addEventListener("click", (event) => {
  event.preventDefault();
  if (selectedMenus.length < maxSelectableMenus) {
    alert(`메뉴를 ${maxSelectableMenus}개 선택해야 합니다.`);
    return;
  }
  console.log(maxSelectableMenus);
  if (maxSelectableMenus == 2) {
    maxSelectableMenus = 3;
    console.log(maxSelectableMenus);
  }
  console.log(maxSelectableMenus);
  fetch("/cafe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedMenus),
  })
    .then((response) => response.text())
    .then((html) => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch((error) => {
      console.error("서버와의 통신 오류:", error);
      alert("서버와의 통신 오류가 발생했습니다.");
    });
});
// 이전 선택지 저장을 위한 구조
let previousSelections = [];
// 서버에서 데이터 가져오기
async function fetchMenuData() {
  try {
    const response = await fetch("/menuData");
    const data = await response.json();

    if (data.success) {
      const { rowsCount, menus } = data;
      // 이전 선택지 업데이트
      previousSelections = [...menus]; // 새로운 메뉴 데이터 추가
      console.log(previousSelections);
      // if (rowsCount >= 0) {
      //   maxSelectableMenus = 3;
      // }

      // title 값 확인
      const title = document.title;
      const titleNum = parseInt(title.replace(/\D/g, ""));

      if (titleNum >= 2) {
        // title 값이 2 이상일 때만 expressMenu 실행
        expressMenu(titleNum);
      }
    } else {
      console.error("Failed to fetch menu data:", data.message);
    }
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
}

// 페이지 로드 시 데이터 가져오기
fetchMenuData();

// 이전 기록을 화면에 표시하는 함수
function expressMenu(titleNum) {
  const divs = [];
  const baseId = 8; // 처음 시작하는 ID는 8부터 시작
  const columns = 3; // 각 열에 3개의 메뉴가 세로로 저장되도록 설정
  const columnSpacing = 7; // 각 열의 간격을 7로 설정

  console.log("Title Num:", titleNum);

  // 이전 기록의 개수만큼 반복
  for (let i = 0; i < previousSelections.length; i++) {
    const col = i % columns; // 각 열(column)에서 위치 계산
    const row = Math.floor(i / columns); // 세로로 나누기 위한 행 계산

    // i 값에 따라 첫 번째 값은 8,15,22, 두 번째 값은 9,16,23... 형식으로 divId 계산
    const divId = baseId + col * columnSpacing + row;

    console.log("Div ID:", divId); // 디버깅용 로그
    const div = document.getElementById(divId);
    if (div) {
      div.innerHTML = previousSelections[i] || "";
      divs.push(divId);
    }
  }
  console.log("Express Menu updated for IDs:", divs);
}
