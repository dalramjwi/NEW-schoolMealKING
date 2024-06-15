/**
 * 매개변수로 만들 tag와 tag의 id를 넣어주면 tag를 만들어주는 함수이다.
 * @param {string} tagName tag의 이름
 * @param {string} tagId tag의 id
 * @param {string} content content 부분의 text 기본 값 ""
 * @returns <${tagName} id = "${tagId}">${content}</${tagName}>
 */
export const tagIdMaker = function (tagName, tagId, content = "") {
  return `<${tagName} id = "${tagId}">${content}</${tagName}>`;
};
