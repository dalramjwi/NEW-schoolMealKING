import { formSet3 } from "./formSet3.js";
// const button = buttonSet("submit", "진행하기");
const root = document.getElementById("root");
const rootText = document.getElementById("rootText");
const formdata = ["/menu", "post", rootText];
const buttondata = ["submit", "진행하기"];
formSet3(formdata, buttondata);
root.addEventListener("click", () => {
  rootText.style.display = "block";
});
