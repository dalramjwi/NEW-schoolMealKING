const top = require("../basic_module/literalParts/top");
const end = require("../basic_module/literalParts/end");
const body = require("./bodyMaker");
const database = require("sqlite3").verbose();
const db = new database.Database(`../../../database/school.db`, (err) => {
  if (err) {
    console.log("에러 발생 : ", err.message);
  }
});
const componentAssemble = {
  main:
    top.baseTop("main", "public/css/main") +
    body.mainBody +
    end.baseEnd("public/js/main"),
  menu:
    top.baseTop(`menu${1}`, "public/css/menu") +
    body.menuBody +
    end.baseEnd("public/js/menu"),
  cafe0:
    top.baseTop("cafe0", "public/css/cafe") +
    body.cafeBody +
    end.baseEnd("public/js/cafe"),
  cafe1:
    top.baseTop("cafe1", "public/css/cafe") +
    body.cafeBody +
    end.baseEnd("public/js/cafe"),
  hpoinCheck0:
    top.baseTop("hpointCheck0", "public/css/hpointCheck") +
    body.hpoinCheckBody +
    end.baseEnd("public/js/hpointCheck"),
  hpoinCheck1:
    top.baseTop("hpointCheck1", "public/css/hpointCheck") +
    body.hpoinCheckBody +
    end.baseEnd("public/js/hpointCheck"),
  randomPrinciple:
    top.baseTop("main", "public/css/randomPrinciple") +
    body.randomPrincipleBody +
    end.baseEnd("public/js/random/principle"),
  randomFinger:
    top.baseTop("main", "public/css/randomFinger") +
    body.randomFingerBody +
    end.baseEnd("public/js/random/finger"),
  randomrefrigeator:
    top.baseTop("main", "public/css/randomrefrige") +
    body.randombaseBody +
    end.baseEnd("public/js/random/refrige"),
  randomseasoning:
    top.baseTop("main", "public/css/randomSeasoning") +
    body.randombaseBody +
    end.baseEnd("public/js/random/seasoning"),
  end:
    top.baseTop("main", "public/css/end") +
    body.randomPrincipleBody +
    end.baseEnd("public/js/end"),
};

// sum 테이블에서 행 수 가져오기
db.get("SELECT COUNT(*) AS rowCount FROM sum", (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }

  // 행 수에 따라 menu 업데이트
  const rowCount = row.rowCount;
  componentAssemble.menu =
    top.baseTop(`menu${rowCount}`, "public/css/menu") +
    body.menuBody +
    end.baseEnd("public/js/menu");

  // 동적으로 변경된 componentAssemble 객체를 여기서 사용 가능
  console.log(componentAssemble.menu);
});
module.exports = componentAssemble;
