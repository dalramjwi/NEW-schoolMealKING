const m = require("../../../module_assemble.js");

function endPage(res) {
  res.send(m.componentAssemble.end);
}

module.exports = endPage;
