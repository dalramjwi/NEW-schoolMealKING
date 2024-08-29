const divMaker = require("./divMaker");
/**
 * body 태그 안에 리터럴 요소 삽입하는 함수
 * @param {string} content body 안에 들어갈 요소
 */
function bodyMaker(content) {
  return `<body>${content}</body>`;
}
const body = {
  mainBody: bodyMaker(divMaker.root(divMaker.mainRootContent())),
  menuBody: bodyMaker(divMaker.root(divMaker.menuRootContent())),
  cafeBody: bodyMaker(divMaker.root(divMaker.cafeRootContent())),
  hpoinCheckBody: bodyMaker(divMaker.root(divMaker.hpointRootContent())),
  randomPrincipleBody: bodyMaker(divMaker.randomPrincipleRootContent()),
  randomFingerBody: bodyMaker(divMaker.randomFingerRootContent()),
  randombaseBody: bodyMaker(divMaker.root()),
};
module.exports = body;
