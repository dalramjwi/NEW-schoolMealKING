const tagIdMaker = require("./tagIdMaker");
const divMaker = {
  //공통 부분
  /**
   * root Div 만드는 함수
   * @param {function} rootContent root의 안에 들어갈 요소
   */
  root: (rootContent) => {
    return tagIdMaker("div", "root", rootContent);
  },
  line: tagIdMaker("div", "line"),
  bLine: tagIdMaker("div", "bLine"),
  //별개 HTML 부분
  /**
   * main의 root에 들어갈 내용의 함수
   */
  mainRootContent: () => {
    const page = tagIdMaker("div", "page");
    const letter = tagIdMaker("div", "letter", page);
    return divMaker.line + letter + divMaker.bLine;
  },
  //별개 HTML 부분
  /**
   * menu의 root에 들어갈 내용의 함수
   */
  menuRootContent: () => {
    const day = tagIdMaker("div", "day");
    const menu = tagIdMaker("div", "menu");
    const dayAndMenu = day + menu;
    const graph = tagIdMaker("div", "graph", dayAndMenu);
    return divMaker.line + graph + divMaker.bLine;
  },
  cafeRootContent: () => {
    const show = tagIdMaker("div", "show");
    const cafeLine = tagIdMaker("div", "line", show);
    const space = tagIdMaker("div", "space", trio);
  },
};
module.exports = divMaker;
