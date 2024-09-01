// 선택된 메뉴를 담을 배열
export let selectedMenus = [];

// 체크박스 클릭 이벤트
export function checkboxEvent(event, maxSelectableMenus) {
  if (event.target.type === "checkbox") {
    const checkbox = event.target;

    if (checkbox.checked) {
      selectedMenus.push(checkbox.value);

      // 최대 선택 가능 메뉴 수에 따라 선택 제한
      if (selectedMenus.length > maxSelectableMenus) {
        checkbox.checked = false;
        selectedMenus = selectedMenus.filter((item) => item !== checkbox.value);
        alert(`최대 ${maxSelectableMenus}개까지만 선택할 수 있습니다.`);
        return;
      }
    } else {
      selectedMenus = selectedMenus.filter((item) => item !== checkbox.value);
    }

    console.log("선택된 메뉴 : ", selectedMenus);
    updateMenu(7);
    return selectedMenus;
  }
}

// menu 배열을 반영하는 이벤트 함수
export function updateMenu(col) {
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
