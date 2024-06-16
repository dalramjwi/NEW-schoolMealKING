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
  nameArr: [
    "고등어 구이",
    "샐러드",
    "떡",
    "김치찌개",
    "스프",
    "마늘빵",
    "불고기",
    "피자",
    "주스",
    "잡채",
    "햄버거",
    "쿠키",
    "볶음밥",
    "스파게티",
    "아이스크림",
  ],
};
