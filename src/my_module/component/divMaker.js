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
};
module.exports = divMaker;
