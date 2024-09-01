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
      maxSelectableMenus = 2;
      console.log("메뉴 선택 제한이 2로 설정되었습니다.");
    }
  })
  .catch((error) => {
    console.error("서버와의 통신 오류:", error);
  });

// 메뉴 선택 이벤트
let selectedCount = 0; // 선택된 메뉴 개수 추적
menu.addEventListener("click", (event) => {
  if (selectedCount < maxSelectableMenus) {
    checkboxEvent(
      event,
      () => {
        updateMenu(7);
        selectedCount++;
      },
      maxSelectableMenus
    );
  } else {
    alert("선택 가능한 메뉴는 최대 " + maxSelectableMenus + "개입니다.");
    event.preventDefault();
  }
});

// bLine 클릭 시 선택된 메뉴 전송
bLine.addEventListener("click", (event) => {
  event.preventDefault();
  if (selectedMenus.length < maxSelectableMenus) {
    alert(`메뉴를 ${maxSelectableMenus}개 선택해야 합니다.`);
    return;
  }
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
