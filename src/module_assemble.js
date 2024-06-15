/**
 * module을 모아놓는 집합체 객체
 */
const modules = {
  path: require("path"),
  componentAssemble: require("./my_module/component/component_assemble"),
};
console.log(modules);
module.exports = modules;
