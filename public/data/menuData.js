export const menuData = {
  /**
   * @param {number} col grid의 col 수
   * @param {number} month 해당 설정할 달
   * @returns 첫 칸은 비어있는 날짜 리터럴 배열
   */
  date: (col, month) => {
    const date = [""];
    for (let i = 1; i < col; i++) {
      date.push(`${month}.${i}`);
    }
    return date;
  },
  menu: {
    han: ["고등어 구이", "김치찌개", "불고기", "잡채", "볶음밥"],
    yang: ["샐러드", "스프", "피자", "햄버거", "스파게티", "햄버거"],
    hoo: ["떡", "마늘빵", "주스", "쿠키", "아이스크림"],
  },

  idArr: [
    "fish",
    "salad",
    "riceCake",
    "kimchi",
    "soup",
    "bread",
    "gogi",
    "pizza",
    "juice",
    "jap",
    "ham",
    "cookie",
    "bob",
    "spage",
    "ice",
  ],
};
