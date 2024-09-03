const m = require("../../../module_assemble.js");

function end(res) {
  res.send(m.componentAssemble.end);
}

module.exports = end;
