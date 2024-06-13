const topTemplate = {
  /**
   * 기본 html top
   * @param {string} title title name
   * @param {string} name 삽입할 css 이름
   */
  baseTop: function (title, name) {
    return `<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <link rel="stylesheet" href="./${name}.css">
      </head>
      `;
  },
  /**
   * metadata에 시간 삽입하는 html top
   * @param {string} name 삽입할 css 이름
   * @param {number} date 기록할 시간 number - getCurrentDate 함수 사용함
   */
  pageTop: function (name, date) {
    return `<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content="${date}" id="currentDate">
        <title>Sorock</title>
        <link rel="stylesheet" href="./${name}.css">
      </head>
      <body>
      `;
  },
};
module.exports = topTemplate;
