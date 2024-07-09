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
    yang: ["샐러드", "스프", "피자", "햄버거", "스파게티"],
    hoo: ["떡", "마늘빵", "주스", "쿠키", "아이스크림"],
  },
  menuEng: {
    han: ["fish", "gook", "bool", "japchae", "rice"],
    yang: ["salad", "soup", "pizza", "ham", "spa"],
    hoo: ["ddok", "bread", "tea", "cookie", "ice"],
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
  menuValue: () => {
    // 각 메뉴 항목의 호감도 포인트와 영양도 포인트
    const hpoint = [0, 1, 2, 1, 3, 1, 2, 2, 1, 1, 2, 2, 3];
    const ypoint = [2, 1, 0, 0, 3, 1, 0, 0, 0, 0, 1, 1, 0];

    // this.menu를 참조하여 변형
    const menuArr = Object.keys(menuData.menu).reduce((acc, key) => {
      // 카테고리의 각 메뉴 항목을 변형하여 acc 배열에 추가
      menuData.menu[key].forEach((item, index) => {
        // 메뉴 항목의 hpoint와 ypoint를 배열에서 가져옴
        const h = hpoint[index];
        const y = ypoint[index];
        acc.push([item, h, y]);
      });

      return acc;
    }, []);
    return menuArr;
  },
};
