const m = require("../../module_assemble.js");
const componentAssemble = {
  body: m.tagMaker("body", bodyContent),
  root: m.tagIdMaker("div", rootContent, "root"),
};
