import { generateImgSrc } from "../js_module/generateImgSrc.js";

export function createImgData() {
  //이미지 데이터 배열 반환
  return [
    { src: generateImgSrc("human")[0], parent: human, alt: "Human Base Image" },
    { src: generateImgSrc("food"), parent: food, alt: "sik Image" },
  ];
}
