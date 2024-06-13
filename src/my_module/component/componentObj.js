const makeComponent = require("./makeComponent");

const componentpart = {
  mainPartBody: makeComponent.root(makeComponent.rootBodyContent()),
};

const componentObj = {
  mainBody: makeComponent.body(componentpart.mainPartBody),
};

module.exports = componentObj;
