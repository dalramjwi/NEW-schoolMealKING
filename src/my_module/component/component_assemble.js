const m = require("../../module_assemble");
const component_assemble = {
  main: m.top + m.componentObj.mainBody + m.end,
};
// console.log(component_assemble.main);
// console.log(m.tagIdMaker);
// console.log(m.componentObj());
console.log(typeof m.componentObj());
