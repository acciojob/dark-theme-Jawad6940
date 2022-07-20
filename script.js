//your code he

const button_night= document.querySelector(".button_day");
const night= document.querySelector(".day");
// const btn= document.querySelector("#swap");

function swapTheme(){
    button_night.classList.toggle("button_night");
    night.classList.toggle("night");
}
button_night.addEventListener("click", swapTheme);