const m = require("../../module_assemble.js");
const componentAssemble = {
  body: (bodyContent) => {
    m.tagMaker("body", bodyContent);
  },
  root: (rootContent) => {
    m.tagIdMaker("div", rootContent, "root");
  },
};
