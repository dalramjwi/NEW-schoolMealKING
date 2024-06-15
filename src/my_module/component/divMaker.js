const tagIdMaker = require("./tagIdMaker");
const divMaker = {
  //공통 부분
  root: (rootContent) => {
    return tagIdMaker("div", "root", rootContent);
  },
  line: tagIdMaker("div", "line"),
  bLine: tagIdMaker("div", "bLine"),
  //별개 HTML 부분
  mainRootContent: () => {
    const page = tagIdMaker("div", "page");
    const letter = tagIdMaker("div", "letter", page);
    return divMaker.line + letter + divMaker.bLine;
  },
};
module.exports = divMaker;
console.log(divMaker);
