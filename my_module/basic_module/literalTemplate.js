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
};

// export한 데이터 받아오는 명령어
//? const template = require("./literalTemplate");
module.exports = template;
