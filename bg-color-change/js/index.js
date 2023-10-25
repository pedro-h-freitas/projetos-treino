const bgButton = document.querySelector("#bg-color-btn");
const body = document.querySelector("body");

bgButton.addEventListener("input", (e) => {
  body.style.backgroundColor = e.target.value;
});
