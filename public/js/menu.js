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
  const cases =(index)=> {
    0= () => tagIdMaker("div", 0, menuData.menu.han[0]),
    1= () => tagIdMaker("div", 1, menuData.menu.yang[0]),
    2=() => tagIdMaker("div", 2, menuData.menu.hoo[0]),
    han= (index) => {
      let indexA = index + 3;
      tagIdMaker("div", indexA, menuData.menu.han[indexA]);
    },
    yang= (index) => {
      let indexA = index + 4;
      tagIdMaker("div", indexA, menuData.menu.yang[indexA]);
    },
    hoo= (index) => {
      let indexA = index + 5;
      tagIdMaker("div", indexA, menuData.menu.hoo[indexA]);
    },
    
  };
  return cases(index);
  // switch (index) {
  //   case 0:
  //     return tagIdMaker("div", index, menuData.menu.han[0]);
  //   case 1:
  //     return tagIdMaker("div", index, menuData.menu.yang[0]);
  //   case 2:
  //     return tagIdMaker("div", index, menuData.menu.hoo[0]);
  // }
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
