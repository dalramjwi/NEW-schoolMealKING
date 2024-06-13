const m = require("../../module_assemble.js");
const componentAssemble = {
  body: (bodyContent) => {
    return m.tagMaker("body", bodyContent);
  },
  root: (rootContent) => {
    return m.tagIdMaker("div", rootContent, "root");
  },
  rootBodyContent: () => {},
  mainPartBody: root(rootBodyContent()),
  mainBody: body(mainPartBody),
};
