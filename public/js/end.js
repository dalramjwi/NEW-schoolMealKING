document.addEventListener("DOMContentLoaded", () => {
  // 서버에 /end 요청을 보냄
  fetch("/end", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}), // 필요한 데이터가 있다면 여기에 추가
  })
    .then((response) => response.json())
    .then((data) => {
      // 응답 데이터에서 hpointFinal과 ypointFinal 값을 가져옴
      const messageDiv = document.getElementById("message");
      let hpoint = data.hpointFinal;
      let ypoint = data.ypointFinal;

      console.log(data);
      console.log(hpoint);
      console.log(ypoint);

      // 호감도와 영양도 충족 여부 확인
      let hpointMessage =
        hpoint >= 20
          ? "호감도 : 충족했습니다."
          : "호감도 : 충족하지 못했습니다.";
      let ypointMessage =
        ypoint >= 20
          ? "영양도 : 충족했습니다."
          : "영양도 : 충족하지 못했습니다.";

      // 전체 성공 여부 확인
      let resultMessage =
        hpoint >= 20 && ypoint >= 20
          ? "당신은 성공하셨습니다."
          : "당신은 실패하셨습니다.";

      // 메시지 div에 결과 출력
      messageDiv.innerText = `${hpointMessage}\n${ypointMessage}\n${resultMessage}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // #root에 btn 삽입
  const rootDiv = document.getElementById("root");
  const restartBtn = document.createElement("button");
  restartBtn.innerText = "Restart";
  rootDiv.appendChild(restartBtn);

  // btn 클릭 이벤트
  restartBtn.addEventListener("click", () => {
    // 모달 창 생성
    const modalDiv = document.createElement("div");
    modalDiv.style.position = "fixed";
    modalDiv.style.top = "50%";
    modalDiv.style.left = "50%";
    modalDiv.style.transform = "translate(-50%, -50%)";
    modalDiv.style.backgroundColor = "#fff";
    modalDiv.style.padding = "20px";
    modalDiv.style.border = "1px solid #ccc";
    modalDiv.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)";
    modalDiv.style.zIndex = "1000";

    const modalMessage = document.createElement("p");
    modalMessage.innerText = "정말 재시작하겠습니까?";
    modalDiv.appendChild(modalMessage);

    const yesBtn = document.createElement("button");
    yesBtn.innerText = "YES";
    modalDiv.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.innerText = "N O";
    noBtn.style.marginLeft = "1vw";
    modalDiv.appendChild(noBtn);

    document.body.appendChild(modalDiv);

    // 예 버튼 클릭 시 /restart로 요청
    yesBtn.addEventListener("click", () => {
      fetch("/restart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Restarted:", data);
          window.location.href = "/";
          // 모달 창 제거
          document.body.removeChild(modalDiv);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });

    // 아니오 버튼 클릭 시 모달 창 닫기
    noBtn.addEventListener("click", () => {
      document.body.removeChild(modalDiv);
    });
  });
});
