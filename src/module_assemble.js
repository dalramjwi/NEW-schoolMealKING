/**
 * module을 모아놓는 집합체 객체
 */
const modules = {
  path: require("path"),
  tagMaker: require("./my_module/component/tagMaker"),
  tagIdMaker: require("./my_module/component/tagIdMaker"),
  componentWork: require("./my_module/component/componentObj"),
  top: require("./my_module/basic_module/literalParts/top"),
  end: require("./my_module/basic_module/literalParts/end"),
  makeComponent: require("./my_module/component/makeComponent"),
};
console.log(modules);
module.exports = modules;
