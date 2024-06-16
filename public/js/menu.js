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
//만들어진 div 특정 text 삽입
console.log(dayDiv);
const app = () => {};
app();
console.log(menuData.date(7, 2));
console.log(menuData.menu);
