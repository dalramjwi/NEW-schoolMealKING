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
};
