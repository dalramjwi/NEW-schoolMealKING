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

//만들어진 div 특정 text 삽입 - day
const daymap = gridSet(4, 7).map((item, index) => {
  if (index < 7) {
    return tagIdMaker("div", index, menuData.date(7, 2)[index]);
  } else {
    return item;
  }
});
//menu 제목 삽입
const menuarr = ["한", "양", "후"];
const menuName = [];
for (let i = 0; i < 3; i++) {
  menuName.push(tagIdMaker("div", `${menuarr[i]}식`, `${menuarr[i]}식`));
}
//menu 내용 삽입
const menumap = gridSet(5, 3).map((item, index) => {
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
//실행 - 기본 component 생성
const app = () => {
  day.innerHTML = daymap.join("");
  menu.innerHTML = menuName.join("") + menumap.join("");
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
    } else {
      selectedMenus = selectedMenus.filter((item) => item !== checkbox.value);
    }

    console.log("선택된 메뉴 : ", selectedMenus);
    updateMenu();
  }
});
//menu 배열을 반영하는 이벤트 함수
function updateMenu() {
  const title = document.title;
  console.log(title);
}
