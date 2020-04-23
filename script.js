var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

function displayCSS(){
    css.textContent = body.style.background +";";
}

function setGradient(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    displayCSS();
}

function generateRandomColors(){
    var randomColor = (Math.random()*0xFFFFFF<<0).toString(16);

    var hex = `#${randomColor}`;
    return hex;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", function(){
    color1.value = generateRandomColors();
    color2.value = generateRandomColors();

    setGradient();
});


window.onload = function(){
    this.setGradient()
}