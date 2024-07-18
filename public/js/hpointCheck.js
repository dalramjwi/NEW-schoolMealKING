import { createAndAppendImg } from "../js_module/createAppendImg.js";
import { generateImgSrc } from "../js_module/generateImgSrc.js";
const root = document.getElementById("root");
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
