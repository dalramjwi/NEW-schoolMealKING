const m = require("../../module_assemble");
const makeComponent = {
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
    return makeComponent.line + letter + makeComponent.bLine;
  },
};
const bodyContent = makeComponent.root(makeComponent.rootBodyContent());
const body = makeComponent.body(bodyContent);
console.log(body);
module.exports = makeComponent;
