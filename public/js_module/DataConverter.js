// DataConverter 클래스 정의
export class DataConverter {
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
