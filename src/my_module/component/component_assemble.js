const top = require("../basic_module/literalParts/top");
const end = require("../basic_module/literalParts/end");
const body = require("./bodyMaker");
const componentAssemble = {
  main:
    top.baseTop("main", "public/css/main") +
    body.mainBody +
    end.baseEnd("public/js/main"),
  menu:
    top.baseTop("menu1", "public/css/menu") +
    body.menuBody +
    end.baseEnd("public/js/menu"),
  cafe0:
    top.baseTop("cafe0", "public/css/cafe") +
    body.cafeBody +
    end.baseEnd("public/js/cafe"),
  cafe1:
    top.baseTop("cafe1", "public/css/cafe") +
    body.cafeBody +
    end.baseEnd("public/js/cafe"),
  hpoinCheck0:
    top.baseTop("hpoinCheck0", "public/css/hpointCheck") +
    body.hpoinCheckBody +
    end.baseEnd("public/js/hpoinCheck"),
  hpoinCheck1:
    top.baseTop("hpoinCheck1", "public/css/hpointCheck") +
    body.hpoinCheckBody +
    end.baseEnd("public/js/hpoinCheck"),
};
module.exports = componentAssemble;
