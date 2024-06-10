const endTemplate = require("./literalParts/end");
const mainTemplate = require("./literalParts/main");
const topTemplate = require("./literalParts/top");

const template = {
  indexTemplate: function () {
    return (
      topTemplate.baseTop("index") +
      mainTemplate.root("rootText", "rootEnd") +
      endTemplate.baseEnd("index")
    );
  },
  cafeTemplate: function () {
    return (
      topTemplate.baseTop("menu") +
      mainTemplate.root("menu1", "menu2") +
      endTemplate.baseEnd("menu")
    );
  },
};
// export한 데이터 받아오는 명령어
//? const template = require("./literalTemplate");
module.exports = template;
