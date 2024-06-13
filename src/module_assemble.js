/**
 * module을 모아놓는 집합체 객체
 */
const modules = {
  path: require("path"),
  tagIdMaker: require("./my_module/component/tagIdMaker"),
  tagMaker: require("./my_module/component/tagMaker"),
  componentObj: require("./my_module/component/componentObj"),
  top: require("./my_module/basic_module/literalParts/top"),
  end: require("./my_module/basic_module/literalParts/end"),
};

module.exports = modules;
