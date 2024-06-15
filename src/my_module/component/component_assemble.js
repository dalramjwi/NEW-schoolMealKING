const top = require("../basic_module/literalParts/top");
const end = require("../basic_module/literalParts/end");
const body = require("./bodyMaker");
const componentAssemble = {
  main:
    top.baseTop("main", "public/css/main") +
    body.mainBody +
    end.baseEnd("public/js/main"),
};
console.log(componentAssemble.main);
