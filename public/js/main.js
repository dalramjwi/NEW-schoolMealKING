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
    page.innerHTML = tagIdMaker(
      "div",
      "text",
      `
    후임 영양사에게..<br>이 편지는 아무런 인수인계 없이 일을 시작하라고 명령받은 후임 영양사를 위한 편지입니다.<br><br>
    요즘 같은 불경기에 이렇게 좋은 조건으로 신입 영양사가 구인되는 것이 수상하다고 생각하지는 못했나요?<br><br>
    사실 이 학교는 저주받았습니다.<br><br>
    이유는 정확히 알 수 없지만, 또다른 선임 영양사들의 기록에 따르면 일주일 간 당신에게 주어진 메뉴를 
    조합해 급식표를 짜고, 그 제공된 급식이 학생들에게 적절한 영양도와 일정 수준 이상의 호감도를 충족하지 
    못한다면, 당신은 죽습니다.<br><br>
    아마 당신이 이 편지를 읽고 있다는 것은 제가 실패했다는 뜻이겠죠..<br><br>
    탈출하려 해도 소용 없습니다.<br><br>
    학생들이 학교에 나오는 날들 동안, 영양사는 집에 갈 수 없다는 것이 이 학교의 규칙입니다. 
    그리고, 그 규칙은 어떠한 형태로든 지켜지게 됩니다.<br><br>
    부디 그 규칙을 깨려는 행동은 하지 마십시오.<br><br>
    쓸데없이 목숨만 버리는 셈입니다.<br><br>
    학생들이 학교를 나오는 5일간의 점심을, <strong>‘적절한 영양도와 적절한 호감도’</strong>를 충족시킬 수 있도록 
    급식표를 잘 짜서 살아나가길 바랍니다...
  `
    );
    btnFormSet(formData, buttonData);
    makingTag = false;
  } else {
    console.log("already make tag");
  }
});
letter.addEventListener("click", function () {
  this.classList.toggle("open");
});
