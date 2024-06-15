//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
//div id, 변수 할당
const line = document.getElementById("line");
const letter = document.getElementById("letter");
const page = document.getElementById("page");
const bLine = document.getElementById("bLine");
letter.addEventListener("click", () => {
  page.innerHTML = tagIdMaker("div", "text", "내용");
  bLine.innerHTML = tagIdMaker("button", "btn", "다음");
});
