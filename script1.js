var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("btn");




function createRandomColor(){
    var color = '#';
    color += Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }



  
function setColor() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

css.textContent= body.style.background +";";
}

function randomColor(){
    color1.value = createRandomColor();
    color2.value = createRandomColor();
    setColor();
}





color1.addEventListener("input", setColor);
color2.addEventListener("input", setColor);
btn.addEventListener("click", randomColor);