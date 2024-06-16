//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridTextSet } from "../js_module/gridTextSet.js";
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
// 선택된 메뉴를 담을 배열
let selectedMenus = [];
// 체크박스 클릭 이벤트
menu.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    const checkbox = event.target;
    if (checkbox.checked) {
      selectedMenus.push(checkbox.value);
      if (selectedMenus.length > 3) {
        checkbox.checked = false;
        selectedMenus = selectedMenus.filter((item) => item !== checkbox.value);
        alert("최대 3개까지만 선택할 수 있습니다.");
        return;
      }
    } else {
      selectedMenus = selectedMenus.filter((item) => item !== checkbox.value);
    }
    console.log("선택된 메뉴 : ", selectedMenus);
    updateMenu(7);
  }
});
//menu 배열을 반영하는 이벤트 함수
function updateMenu(col) {
  const title = document.title;
  const titleNum = parseInt(title.replace(/\D/g, ""));
  console.log(titleNum);
  if (titleNum) {
    const divs = [titleNum + col, titleNum + col * 2, titleNum + col * 3];
    const divOne = document.getElementById(`${divs[0]}`);
    const divTwo = document.getElementById(`${divs[1]}`);
    const divThree = document.getElementById(`${divs[2]}`);
    if (divOne) {
      divOne.innerHTML = selectedMenus[0] || "";
      if (divTwo) {
        divTwo.innerHTML = selectedMenus[1] || "";
        if (divThree) {
          divThree.innerHTML = selectedMenus[2] || "";
        }
      }
    }
  }
}
