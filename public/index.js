import { formSet3 } from "./js_module/formSet3";
// const button = buttonSet("submit", "진행하기");
const root = document.getElementById("root");
const rOne = document.getElementById("rOne");
const rTwo = document.getElementById("rTwo");
const formdata = ["/menu", "post", rTwo];
const buttondata = ["submit", "진행하기"];
formSet3(formdata, buttondata);
root.addEventListener("click", () => {
  rOne.style.display = "block";
  rTwo.style.display = "block";
});
