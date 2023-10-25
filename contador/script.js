const value = document.querySelector("#count-value");
const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");

const render = (num) => {
  value.innerHTML = `${parseInt(value.innerText) + num}`;
};

sum.addEventListener("click", () => render(+1));

sub.addEventListener("click", () => render(-1));
