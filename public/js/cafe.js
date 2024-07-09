class DataConverter {
  constructor(data) {
    this.convertedData = {};

    data.forEach((item) => {
      const key = item[0];
      const value = item[1];

      if (typeof value === "object") {
        this.convertedData[key] = { ...value };
        // 객체일 경우 스프레드 연산자로 복사
      } else {
        this.convertedData[key] = value;
        // 이외 - 문자열일 경우 그대로 저장
      }
    });
  }
}
imgSrc = [
  ["show", "dayOne"],
  ["human", { base: "base", happy: "happy", sad: "sad" }],
  ["food", "sik"],
  [
    "mealOne",
    { rice: "rice", gook: "gook", soup: "soup", spa: "spa", pizza: "pizza" },
  ],
  [
    "mealTwo",
    { rice: "rice", gook: "gook", soup: "soup", spa: "spa", pizza: "pizza" },
  ],
  [
    "mealThree",
    {
      japchae: "japchae",
      bool: "bool",
      fish: "fish",
      ddok: "ddok",
      cookie: "cookie",
      ham: "ham",
      salad: "salad",
      bread: "bread",
      tea: "tea",
      ice: "ice",
    },
  ],
  [
    "mealFour",
    {
      japchae: "japchae",
      bool: "bool",
      fish: "fish",
      ddok: "ddok",
      cookie: "cookie",
      ham: "ham",
      salad: "salad",
      bread: "bread",
      tea: "tea",
      ice: "ice",
    },
  ],
  [
    "mealFive",
    {
      japchae: "japchae",
      bool: "bool",
      fish: "fish",
      ddok: "ddok",
      cookie: "cookie",
      ham: "ham",
      salad: "salad",
      bread: "bread",
      tea: "tea",
      ice: "ice",
    },
  ],
];
const converter = new DataConverter(imgSrc);
console.log(converter.convertedData);
