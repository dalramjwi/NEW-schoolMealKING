const m = require("../../module_assemble.js");
const componentAssemble = {
  body: (bodyContent) => {
    return m.tagMaker("body", bodyContent);
  },
  root: (rootContent) => {
    return m.tagIdMaker("div", "root", rootContent);
  },
  line: m.tagIdMaker("div", "line"),
  bLine: m.tagIdMaker("div", "bLine"),
  rootBodyContent: () => {
    const page = m.tagIdMaker("div", "page");
    const letter = m.tagIdMaker("div", "letter", page);
    return line + letter + bLine;
  },
  mainPartBody: root(rootBodyContent()),
  mainBody: body(mainPartBody),
};
console.log(componentAssemble.mainBody);
