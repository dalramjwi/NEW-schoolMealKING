const m = require("../../module_assemble");

const ca = {
  // mainPartBody: m.makeComponent.root(rootBodyContent()),
  // mainBody: m.makeComponent.body("mainPartBody"),
  mainBody: m.makeComponent,
};
module.exports = ca;
console.log(ca.mainBody);
