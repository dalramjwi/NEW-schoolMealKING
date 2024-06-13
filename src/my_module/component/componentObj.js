const makeComponent = require("./makeComponent");
const componentWork = () => {
  const componentpart = {
    mainPartBody: makeComponent.root(makeComponent.rootBodyContent()),
  };
  const componentObj = {
    mainBody: makeComponent.body(componentpart.mainPartBody),
  };
  return componentObj;
};

module.exports = componentWork;
