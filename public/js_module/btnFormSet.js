import { buttonSet } from "./buttonSet.js";
/**
 * button을 포함한 form을 동적으로 작성하는 함수
 * @param {array} formData ["actionPath", "method", path] 의 배열
 * @param {array} buttonData ["submit", "text"];
 * @returns button이 삽입되어 있는 form
 */
export const btnFormSet = function (formData, buttonData) {
  const form = document.createElement("form");
  form.setAttribute("action", formData[0]);
  form.setAttribute("method", formData[1]);
  form.id = "btnForm";
  form.appendChild(buttonSet(buttonData[0], buttonData[1]));
  formData[2].appendChild(form);
  return form;
};

//? export한 데이터 받아오는 명령어
//? import { formSet2 } from "./formSet3.js";
