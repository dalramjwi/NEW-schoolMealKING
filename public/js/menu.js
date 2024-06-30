import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridTextSet } from "../js_module/gridTextSet.js";
import {
  checkboxEvent,
  updateMenu,
  selectedMenus,
} from "./../js_module/checkboxEvent.js";

//div id, 변수 할당
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const bLine = document.getElementById("bLine");
const btnForm = document.getElementById("btnForm");
//기본 실행 DOMAPI 조작

//btn 만들기
let formData = ["./cafe", "POST", bLine];
let buttonData = ["submit", "진행하기"];
btnFormSet(formData, buttonData);

//menu 제목 삽입
const menuarr = ["한", "양", "후"];
const menuName = [];
for (let i = 0; i < 3; i++) {
  menuName.push(tagIdMaker("div", `${menuarr[i]}식`, `${menuarr[i]}식`));
}

//실행 - 기본 component 생성
const app = () => {
  day.innerHTML = gridTextSet.daymap.join("");
  menu.innerHTML = menuName.join("") + gridTextSet.menumap.join("");
};
app();
//checkbox Event 실행
menu.addEventListener("click", (event) => {
  checkboxEvent(event, () => {
    updateMenu(7);
  });
});
// 메뉴 개수 체크 및 서버에 데이터 전송
bLine.addEventListener("click", (event) => {
  event.preventDefault();
  // 선택된 메뉴 개수 확인
  if (selectedMenus.length < 3) {
    alert("메뉴를 3개 선택해야 합니다.");
    return;
  }
  // 3개 이상 선택된 경우 서버로 데이터 전송
  fetch("/cafe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedMenus),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        window.location.href = "./cafe.html";
      } else {
        alert("서버 요청에 실패했습니다.");
      }
    })
    .catch((error) => {
      console.error("서버와의 통신 오류:", error);
      alert("서버와의 통신 오류가 발생했습니다.");
    });
});
