//your code he

const button_night= document.querySelector(".button_day");
const night= document.querySelector(".day");
// const btn= document.querySelector("#swap");

function swapTheme(){
    if(night.className=="day"){
        night.className="night"
        button_night.className="button_night"
    }
    else{
        night.className="day"
        button_night.className="button_day"
    }

}
button_night.addEventListener("click", swapTheme);