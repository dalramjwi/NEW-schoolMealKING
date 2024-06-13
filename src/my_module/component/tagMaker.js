/**
 * 매개변수로 만들 tag를 넣어주면 tag를 만들어주는 함수이다.
 * @param {string} tagName tag의 이름
 * @param {string} content content 부분의 text
 * @returns <${tagName}>${content}</${tagName}>
 */
const tagMaker = function (tagName, content) {
  return `<${tagName}>${content}</${tagName}>`;
};
module.exports = tagMaker;
