const img = document.querySelector("#img");

let index = 0;

let imgs_src = [
  "./img/bigstock_Shocked_Computer_Nerd_1520709.webp",
  "./img/thumbnail.jpeg",
  "./img/download.jpg",
];

const next = () => {
  index++;
  if (index >= 3) index = 0;
};

const previous = () => {
  index--;
  if (index <= -1) index = 2;
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") previous();

  img.src = imgs_src[index];
});

/*
document.addEventListener("click", () => {
  img.src = bl ? imgs_src[0] : (img.src = imgs_src[1]);
  bl = !bl;
});
*/

/*
setInterval(() => {
  img.src = bl ? imgs_src[0] : (img.src = imgs_src[1]);
  bl = !bl;
}, 2000);
*/
