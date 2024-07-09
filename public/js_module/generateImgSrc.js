import { imgSrc } from "../data/imgSrc.js";
import { DataConverter } from "../js_module/DataConverter.js";
const converter = new DataConverter(imgSrc);
// generateImgSrc 함수 정의
export function generateImgSrc(divId) {
  if (converter.convertedData[divId]) {
    const value = converter.convertedData[divId];
    if (typeof value === "object") {
      const imgSrcPaths = [];
      for (let key in value) {
        if (value.hasOwnProperty(key)) {
          imgSrcPaths.push(`./public/img/${value[key]}.png`);
        }
      }
      return imgSrcPaths;
    } else if (typeof value === "string") {
      return [`./public/img/${value}.png`];
    }
  }
}
