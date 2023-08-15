const input = document.querySelector("#validation-input");

input.addEventListener("blur", event => {
  const expectedLength = parseInt(input.getAttribute("data-length"));
  const inputValue = event.target.value;

  if (inputValue.length === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
