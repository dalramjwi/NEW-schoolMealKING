//모듈 호출
import { tagIdMaker } from "../js_module/tagIdComponent.js";
import { gridSet } from "../js_module/gridSet.js";
import { menuData } from "../data/menuData.js";
export const gridTextSet = {
  //만들어진 div 특정 text 삽입 - day
  daymap: gridSet(4, 7).map((item, index) => {
    if (index < 7) {
      return tagIdMaker("div", index, menuData.date(7, 2)[index]);
    } else {
      return item;
    }
  }),
  //menu 내용 삽입
  menumap: gridSet(5, 3).map((item, index) => {
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
  }),
};
