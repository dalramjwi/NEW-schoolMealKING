//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridSet } from "../js_module/gridSet.js";
//div id, 변수 할당
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const bLine = document.getElementById("bLine");

let formData = ["./cafe", "POST", bLine];
let buttonData = ["submit", "진행하기"];

const app = () => {
  day.innerHTML = gridSet(4, 7, "내용1").join("");
  menu.innerHTML = gridSet(6, 3, "내용2").join("");
};
app();
