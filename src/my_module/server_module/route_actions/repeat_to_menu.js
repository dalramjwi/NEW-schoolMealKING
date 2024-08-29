/**
 * '/menu'로 연결하는 동작 수행
 * @param {Object} res - 응답 객체
 */
function repeatToMenu(res) {
  res.json({ success: true, message: "/menu로 연결" });
}

module.exports = repeatToMenu;
