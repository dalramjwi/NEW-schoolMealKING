/**
 * 유효하지 않은 키에 대한 응답 처리
 * @param {Object} res - 응답 객체
 */
function invalidKey(res) {
  res.status(400).json({ success: false, message: "Invalid key" });
}

module.exports = invalidKey;
