const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const seconds = document.querySelector("#seconds");

setInterval(() => {
  const now = new Date().toLocaleTimeString();

  time = now.split(":");

  hour.innerHTML = time[0];
  minute.innerHTML = time[1];
  seconds.innerHTML = time[2];
}, 1000);
