//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
//div id, 변수 할당
const line = document.getElementById("line");
const letter = document.getElementById("letter");
const page = document.getElementById("page");
const bLine = document.getElementById("bLine");

let formData = ["./menu", "POST", bLine];
let buttonData = ["submit", "진행하기"];

let makingTag = true;
letter.addEventListener("click", () => {
  if (makingTag) {
    page.innerHTML = tagIdMaker("div", "text", "내용");
    btnFormSet(formData, buttonData);
    makingTag = false;
  } else {
    console.log("already make tag");
  }
});
