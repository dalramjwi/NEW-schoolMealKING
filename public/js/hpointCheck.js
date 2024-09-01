import { createAndAppendImg } from "../js_module/createAppendImg.js";
import { generateImgSrc } from "../js_module/generateImgSrc.js";
import { setTimeout } from "../js_module/setTimeout.js";
const root = document.getElementById("root");
const textOne = document.getElementById("textOne");
const textTwo = document.getElementById("textTwo");
function createImgData() {
  return [
    {
      src: generateImgSrc("hpointBack"),
      parent: root,
      alt: "",
    },
    { src: generateImgSrc("student1"), parent: childOne, alt: "" },
    { src: generateImgSrc("student2"), parent: childTwo, alt: "" },
  ];
}
createImgData().forEach(({ src, parent, alt }) => {
  createAndAppendImg(src, parent, alt);
});
const texts = {
  positive: ["내일 뭐 나온대?", "요즘 급식 괜찮지 않냐?"],
  negative: ["급식 맛없어", "영양사 언제 바뀌냐"],
};
const title = document.title;
if (title.includes("0")) {
  textOne.innerText = texts.negative[0];
  textTwo.innerText = texts.negative[1];
} else if (title.includes("1")) {
  textOne.innerText = texts.positive[0];
  textTwo.innerText = texts.positive[1];
}
// setTimeout(() => {
//   window.location.href = "/menu";
// }, 5000); // 5초 후에 실행
setTimeout("/menu", 5000);
