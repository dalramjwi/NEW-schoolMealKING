//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
//div id, 변수 할당
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const bLine = document.getElementById("bLine");

let formData = ["./cafe", "POST", bLine];
let buttonData = ["submit", "진행하기"];
const divArr = [];
function gridMake(row, col) {
  for (let i = 0; i < row * col; i++) {
    divArr.push(tagIdMaker("div", i, "내용"));
  }
  return divArr;
}
console.log(gridMake(4, 7));
