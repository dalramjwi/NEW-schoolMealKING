import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridTextSet } from "../js_module/gridTextSet.js";
import {
  checkboxEvent,
  updateMenu,
  selectedMenus,
} from "./../js_module/checkboxEvent.js";
import { response } from "express";
// import { json } from "express";
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
//fetch 사용해 서버에 데이터 전송
bLine.addEventListener("click", (event) => {
  const a = json.stringify(selectedMenus);
  console.log(selectedMenus);
  // event.preventDefault();
  fetch(`/menu`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ a }),
  }).then((response) => {
    console.log(response);
  });
  // });
  //   // (data) => (document.getElementsByTagName("body")[0].textContent = data)
  // )
});
