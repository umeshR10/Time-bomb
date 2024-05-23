let imgEl = document.getElementById("img");
let inputEl = document.getElementById("input");
let timerEl = document.getElementById("timer");
let textEl = document.getElementById("text");
let countdown = 10;

let bombInterval = setInterval(() => {
  if (countdown == 0) {
    clearInterval(bombInterval);
      imgEl.src = "boom.avif";
      textEl.textContent = "you losted!!!";
  } else {
    countdown -= 1;
    timerEl.textContent = countdown;
  }
}, 1000);

function onInputValue(bomb) {
  if (bomb.key === "Enter") {
    if (bomb.target.value === "diffuse") {
      clearInterval(bombInterval);
      textEl.textContent = "chal bhai bomb tera kam khtam!!!";
    } 
    else {
      clearInterval(bombInterval);
      imgEl.src = "boom.avif";
      textEl.textContent = "you losted!!!";
    }
  } 
}
inputEl.addEventListener("keyup", onInputValue);

