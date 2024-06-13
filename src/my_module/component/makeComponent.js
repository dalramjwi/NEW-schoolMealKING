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
    return componentAssemble.line + letter + componentAssemble.bLine;
  },
  // mainPartBody: root(rootBodyContent()),
  // mainBody: body("mainPartBody"),
};
const mainPartBody = componentAssemble.root(
  componentAssemble.rootBodyContent()
);
console.log(mainPartBody);
