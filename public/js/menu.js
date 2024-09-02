import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { btnFormSet } from "../js_module/btnFormSet.js";
import { gridTextSet } from "../js_module/gridTextSet.js";
import {
  checkboxEvent,
  updateMenu,
  selectedMenus,
} from "./../js_module/checkboxEvent.js";

//div id, 변수 할당
const line = document.getElementById("line");
const graph = document.getElementById("graph");
const day = document.getElementById("day");
const menu = document.getElementById("menu");
const bLine = document.getElementById("bLine");
const btnForm = document.getElementById("btnForm");
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
//checkbox Event 실행
menu.addEventListener("click", (event) => {
  checkboxEvent(event, () => {
    updateMenu(7);
  });
});
let maxSelectableMenus = 3; // 기본값

// `/finger` 요청을 통해 메뉴 선택 제한을 확인
fetch("/finger", {
  method: "POST",
})
  .then((response) => {
    if (response.ok) {
      return response.json(); // JSON 응답을 파싱
    } else {
      throw new Error("finger 요청 실패");
    }
  })
  .then((data) => {
    // `/finger` 요청이 성공했다면, 선택 가능 메뉴를 2개로 제한
    if (data.message === "finger") {
      console.log("finger 요청 성공");
      maxSelectableMenus = 2;
    } else {
      // 이벤트가 "finger"가 아닌 경우 기본값 유지
      maxSelectableMenus = 3;
    }
  })
  .catch((error) => {
    console.error("서버와의 통신 오류:", error);
    // `fetch` 요청 실패 시 기본값 유지
    maxSelectableMenus = 3;
  })
  .finally(() => {
    // `fetch` 요청 성공 여부에 관계없이 `bLine` 클릭 이벤트 핸들러 등록
    bLine.addEventListener("click", (event) => {
      event.preventDefault();
      // 선택된 메뉴 개수 확인
      if (selectedMenus.length < maxSelectableMenus) {
        alert(`메뉴를 ${maxSelectableMenus}개 선택해야 합니다.`);
        return;
      }
      // 선택된 메뉴가 충분할 경우 서버로 데이터 전송
      fetch("/cafe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedMenus),
      })
        .then((response) => response.text())
        .then((html) => {
          document.open();
          document.write(html);
          document.close();
        })
        .catch((error) => {
          console.error("서버와의 통신 오류:", error);
          alert("서버와의 통신 오류가 발생했습니다.");
        });
    });
  });
