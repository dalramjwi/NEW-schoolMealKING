const m = require("../../../module_assemble.js");

/**
 * Hpoint를 계산하고 적절한 컴포넌트를 반환하는 동작 수행
 * @param {Object} db - 데이터베이스 객체
 * @param {Object} res - 응답 객체
 */
function hpointCheck(db, res) {
  // 최근 3개의 hpointAll 값을 합산하여 총 hpoint를 계산하는 쿼리
  const query = `
    SELECT SUM(hpointAll) AS totalHpointAll 
    FROM (
      SELECT hpointAll 
      FROM sum 
      ORDER BY ROWID ASC 
      LIMIT 3
    )
  `;

  db.get(query, (err, row) => {
    if (err) {
      console.error("오류 발생:", err);
      res.status(500).json({ success: false, message: "DB 접속 오류" });
      return;
    }
    // 데이터베이스 쿼리 결과에서 totalHpointAll 값을 추출
    // 만약 쿼리 결과가 없거나 totalHpointAll 값이 undefined인 경우, 옵셔널 체이닝 사용 및 널리시 병합으로 기본값으로 0을 할당
    //?.는 객체의 속성에 접근할 때 해당 속성이 존재하지 않으면 undefined를 반환
    //??는 null 또는 undefined인 경우에만 오른쪽의 기본값을 반환
    //row가 정의되지 않았거나 totalHpointAll이 없을 때에도 안전하게 totalHpointAll에 기본값 0을 할당
    const totalHpointAll = row?.totalHpointAll ?? 0;
    console.log("총 HpointAll:", totalHpointAll);

    const hpoint = totalHpointAll >= 16;
    console.log("Hpoint가 16 이상인가?:", hpoint);

    if (hpoint) {
      res.send(m.componentAssemble.hpoinCheck1);
    } else {
      res.send(m.componentAssemble.hpoinCheck0);
    }
  });
}

module.exports = hpointCheck;
