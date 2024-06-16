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
  // 각각의 menu 항목에 대해 case를 생성하는 함수
  const createMenuCase = (index) => {
    let key;
    switch (index % 3) {
      case 0:
        key = "han";
        break;
      case 1:
        key = "yang";
        break;
      case 2:
        key = "hoo";
        break;
    }
    const menuIndex = Math.floor(index / 3);
    const checkboxLabel = `
    <label for="${menuData.idArr[index]}">
      <input type="checkbox" name="${menuData.idArr[index]}" value="${menuData.menu[key][menuIndex]}" id="${menuData.idArr[index]}">
      ${menuData.menu[key][menuIndex]}
    </label>
  `;
    return checkboxLabel;
  };

  return createMenuCase(index);
});
const app = () => {
  day.innerHTML = daymap.join("");
  menu.innerHTML = menumap.join("");
};
app();
