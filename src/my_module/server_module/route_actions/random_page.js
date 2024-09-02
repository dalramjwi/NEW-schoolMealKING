const m = require("../../../module_assemble.js");

/**
 * 랜덤 페이지 처리 (추가 로직 필요)
 * @param {Object} res - 응답 객체
 */
const m = require("../../../module_assemble.js"); // require로 모듈을 불러옵니다.
function randomPage(res) {
  // 랜덤으로 선택할 페이지 목록
  const pages = [
    "randomPrinciple",
    "randomFinger",
    "randomrefrigeator",
    "randomseasoning",
  ];

  // 0부터 pages.length - 1 사이의 정수를 무작위로 생성하여 HTML 페이지를 선택
  const randomIndex = Math.floor(Math.random() * pages.length);
  const selectedPage = pages[randomIndex];

  // 선택된 페이지의 HTML을 응답으로 전송
  // res.send(m.componentAssemble[selectedPage]);
  res.send(m.componentAssemble.randomFinger);
}

module.exports = randomPage;
