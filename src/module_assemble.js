/**
 * module을 모아놓는 집합체 객체
 */
const modules = {
  path: require("path"),
  tagIdMaker: require("./my_module/component/tagIdMaker"),
  tagMaker: require("./my_module/component/tagMaker"),
  component_assemble: require("./my_module/component/component_assemble"),
};

module.exports = modules;
