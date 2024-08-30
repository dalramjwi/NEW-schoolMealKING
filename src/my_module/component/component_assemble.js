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
    top.baseTop("hpointCheck0", "public/css/hpointCheck") +
    body.hpoinCheckBody +
    end.baseEnd("public/js/hpointCheck"),
  hpoinCheck1:
    top.baseTop("hpointCheck1", "public/css/hpointCheck") +
    body.hpoinCheckBody +
    end.baseEnd("public/js/hpointCheck"),
  randomPrinciple:
    top.baseTop("main", "public/css/main") +
    body.randomPrincipleBody +
    end.baseEnd("public/js/main"),
  randomFinger:
    top.baseTop("main", "public/css/randomFinger") +
    body.randomFingerBody +
    end.baseEnd("public/js/main"),
  randomrefrigeator:
    top.baseTop("main", "public/css/main") +
    body.randombase +
    end.baseEnd("public/js/main"),
  randomseasoning:
    top.baseTop("main", "public/css/main") +
    body.randombaseBody +
    end.baseEnd("public/js/main"),
};
module.exports = componentAssemble;
