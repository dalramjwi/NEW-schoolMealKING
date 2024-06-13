const m = require("../../module_assemble.js");
const componentAssemble = {
  body: (bodyContent) => {
    return m.tagMaker("body", bodyContent);
  },
  root: (rootContent) => {
    return m.tagIdMaker("div", rootContent, "root");
  },
  line: m.tagIdMaker("div", "", "line"),
  rootBodyContent: () => {},
  mainPartBody: root(rootBodyContent()),
  mainBody: body(mainPartBody),
};
