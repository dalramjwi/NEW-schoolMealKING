/**
 * 지정된 시간 후에 브라우저를 특정 URL로 리다이렉트하는 함수.
 *
 * @param {string} url - 지연 후 이동할 URL.
 * @param {number} delayTime - 리다이렉트 전에 대기할 시간(밀리초).
 *
 * @example
 * 5초 후에 "/menu"로 리다이렉트
 * setTimeout("/menu", 5000);
 */
export function setTimeout(url, delayTime) {
  setTimeout(() => {
    window.location.href = url;
  }, delayTime);
}
