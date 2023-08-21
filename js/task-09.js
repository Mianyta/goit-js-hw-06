const elements = {
  btn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  color: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

elements.btn.addEventListener("click", changeColor);

function changeColor(evt) {
  let colorHex = getRandomHexColor();
  elements.body.style.backgroundColor = colorHex;
  elements.color.textContent = colorHex;
}