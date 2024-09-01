import { redirectPage } from "../../js_module/setTimeout.js";
redirectPage("/menu", 5000);

// 2초 후에 "음식이 상했다."라는 메시지를 가진 div 창 생성
setTimeout(() => {
  // 새로운 div 요소 생성
  const messageDiv = document.createElement("div");

  // div에 텍스트 추가
  messageDiv.innerText = "음식이 상했다.";

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
