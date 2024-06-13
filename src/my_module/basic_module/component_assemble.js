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
  rootBodyContent: () => {},
  mainPartBody: root(rootBodyContent()),
  mainBody: body(mainPartBody),
};
