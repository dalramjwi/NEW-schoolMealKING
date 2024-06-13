const makeComponent = require("./makeComponent");

const mainPartBody = makeComponent.root(makeComponent.rootBodyContent());

const componentObj = {
  mainBody: makeComponent.body(mainPartBody),
};

module.exports = componentObj;
