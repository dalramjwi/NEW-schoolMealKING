const m = require("../../module_assemble");
const makeComponent = {
  body: (bodyContent) => {
    return m.tagMaker("body", bodyContent);
  },
  // root: (rootContent) => {
  //   return m.tagIdMaker("div", "root", rootContent);
  // },
  // rootBodyContent: () => {
  //   const line = m.tagIdMaker("div", "line");
  //   const bLine = m.tagIdMaker("div", "bLine");
  //   const page = m.tagIdMaker("div", "page");
  //   const letter = m.tagIdMaker("div", "letter", page);
  //   return line + letter + bLine;
  // },
};
module.exports = makeComponent;
