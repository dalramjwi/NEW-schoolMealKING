import { tagIdMaker } from "../js_module/tagIdComponent.js";

const divArr = [];
/**
 * @param {number} row grid row 해당하는 숫자
 * @param {number} col grid col 해당하는 숫자
 * @param {string} content div 안의 text
 * @returns grid의 row, col 만큼의 div와 div 안의 text를 만들어준다.
 */
export function gridSet(row, col, content = "") {
  for (let i = 0; i < row * col; i++) {
    divArr.push(tagIdMaker("div", i, content));
  }
  return divArr;
}
