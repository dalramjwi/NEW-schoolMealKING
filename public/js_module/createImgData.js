import { generateImgSrc } from "../js_module/generateImgSrc.js";

export function createImgData() {
  return [
    { src: generateImgSrc("human")[0], parent: human, alt: "Human Base Image" },
    { src: generateImgSrc("food"), parent: food, alt: "sik Image" },
    { src: generateImgSrc("show"), parent: show, alt: "Show Image" },
  ];
}
