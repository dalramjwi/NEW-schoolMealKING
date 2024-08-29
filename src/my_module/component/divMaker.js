const tagIdMaker = require("./tagIdMaker");
const divMaker = {
  //공통 부분
  /**
   * root Div 만드는 함수
   * @param {function} rootContent root의 안에 들어갈 요소
   */
  root: (rootContent) => {
    return tagIdMaker("div", "root", rootContent);
  },
  line: tagIdMaker("div", "line"),
  bLine: tagIdMaker("div", "bLine"),
  //별개 HTML 부분
  /**
   * main의 root에 들어갈 내용의 함수
   */
  mainRootContent: () => {
    const page = tagIdMaker("div", "page");
    const letter = tagIdMaker("div", "letter", page);
    return divMaker.line + letter + divMaker.bLine;
  },
  //별개 HTML 부분
  /**
   * menu의 root에 들어갈 내용의 함수
   */
  menuRootContent: () => {
    const day = tagIdMaker("div", "day");
    const menu = tagIdMaker("div", "menu");
    const dayAndMenu = day + menu;
    const graph = tagIdMaker("div", "graph", dayAndMenu);
    return divMaker.line + graph + divMaker.bLine;
  },
  cafeRootContent: () => {
    // 각 div 요소를 정의
    const show = tagIdMaker("div", "show");
    const human = tagIdMaker("div", "human");
    const desk = tagIdMaker("div", "desk");
    const mealOne = tagIdMaker("div", "mealOne");
    const mealTwo = tagIdMaker("div", "mealTwo");
    const mealThree = tagIdMaker("div", "mealThree");
    const mealFour = tagIdMaker("div", "mealFour");
    const mealFive = tagIdMaker("div", "mealFive");

    // foodPartOne과 foodPartTwo를 정의
    const foodPartOne = tagIdMaker("div", "foodPartOne", mealOne + mealTwo);
    const foodPartTwo = tagIdMaker(
      "div",
      "foodPartTwo",
      mealThree + mealFour + mealFive
    );

    // food와 space를 정의
    const food = tagIdMaker("div", "food", foodPartOne + foodPartTwo);
    const space = tagIdMaker("div", "space", human + desk + food);
    const cafeLine = tagIdMaker("div", "line", show);
    return cafeLine + space + divMaker.bLine;
  },
  hpointRootContent: () => {
    const textOne = tagIdMaker("div", "textOne");
    const textTwo = tagIdMaker("div", "textTwo");
    const childOne = tagIdMaker("div", "childOne");
    const childTwo = tagIdMaker("div", "childTwo");
    return (
      divMaker.line + textOne + textTwo + childOne + childTwo + divMaker.bLine
    );
  },
  randomPrincipleRootContent: () => {
    const message = tagIdMaker("div", "message");
    return divMaker.root(message);
  },
  randomFingerRootContent: () => {
    const human = tagIdMaker("div", "human");
    const cookdesk = tagIdMaker("div", "cookdesk");
    return divMaker.root(human + cookdesk);
  },
};
module.exports = divMaker;
console.log(divMaker.randomFingerRootContent());
