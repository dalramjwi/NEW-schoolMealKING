import { redirectPage } from "../../js_module/setTimeout.js";

redirectPage("/menu", 5000);

setTimeout(() => {
  // 새로운 div 요소 생성
  const messageDiv = document.createElement("div");

  // div에 텍스트 추가
  messageDiv.innerText = "냉장고가 고장나서 레토르트 음식으로 대체해야겠다.";

  // div를 화면에 추가 (body에 추가하거나 특정 부모 요소에 추가 가능)
  document.body.appendChild(messageDiv);

  // div 스타일링 (선택 사항)
  messageDiv.style.position = "fixed";
  messageDiv.style.top = "50%";
  messageDiv.style.left = "50%";
  messageDiv.style.transform = "translate(-50%, -50%)";
  messageDiv.style.backgroundColor = "#f8d7da";
  messageDiv.style.color = "#721c24";
  messageDiv.style.padding = "20px";
  messageDiv.style.borderRadius = "5px";
  messageDiv.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)";
}, 2000);
// 냉장고 이벤트 발생을 서버로 알리기 위한 fetch 요청
fetch("/refrige", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    event: "refrige",
    effect: "HpointMinus", // 예: 호감도 -1
  }),
});
