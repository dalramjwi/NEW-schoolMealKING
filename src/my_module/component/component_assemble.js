const top = require("../basic_module/literalParts/top");
const end = require("../basic_module/literalParts/end");
const divMaker = require("./divMaker");
const componentAssemble = {
  main: top.baseTop("main", "public/css/main") + end.baseEnd("public/js/main"),
};
console.log(componentAssemble.main);
