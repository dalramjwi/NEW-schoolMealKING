//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridSet } from "../js_module/gridSet.js";
import { menuData } from "../data/menuData.js";
//div id, 변수 할당
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const bLine = document.getElementById("bLine");
//기본 실행 DOMAPI 조작
//btn 만들기
let formData = ["./cafe", "POST", bLine];
let buttonData = ["submit", "진행하기"];
btnFormSet(formData, buttonData);
//day와 menu에 div 만들기
const dayDiv = gridSet(4, 7).join("");
const menuDiv = gridSet(6, 3).join("");
//만들어진 div 특정 text 삽입 - day
const daymap = gridSet(4, 7).map((item, index) => {
  if (index < 7) {
    return tagIdMaker("div", index, menuData.date(7, 2)[index]);
  } else {
    return item;
  }
});
//만들어진 div 특정 text 삽입 - menu
const menumap = gridSet(6, 3).map((item, index) => {
  switch (index) {
    case 0:
      return tagIdMaker("div", index, menuData.menu.han[0]);
    case 1:
      return tagIdMaker("div", index, menuData.menu.yang[0]);
    case 2:
      return tagIdMaker("div", index, menuData.menu.hoo[0]);
    case 3:
      return tagIdMaker("div", index, menuData.menu.han[1]);
    case 4:
      return tagIdMaker("div", index, menuData.menu.yang[1]);
    case 5:
      return tagIdMaker("div", index, menuData.menu.hoo[1]);
  }
  // if (index === 0) {
  //   return tagIdMaker("div", index, menuData.menu.han[0]);
  // } else if (index === 1) {
  //   return tagIdMaker("div", index, menuData.menu.yang[0]);
  // } else if (index === 2) {
  //   return tagIdMaker("div", index, menuData.menu.hoo[0]);
  // } else {
  //   return tagIdMaker("checkbox", index, menuData.menu.han[index]);
  // }
});
console.log(menumap);
const app = () => {
  day.innerHTML = daymap.join("");
  menu.innerHTML = menumap.join("");
};
app();
