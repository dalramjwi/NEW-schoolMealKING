// end.js

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
      // console.log(hpointFinal, ypointFinal);
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
});
