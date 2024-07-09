export function createAndAppendImg(src, parent, altText) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = altText;
  parent.appendChild(img);
}
