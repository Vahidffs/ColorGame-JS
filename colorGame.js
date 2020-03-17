var colors = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var rgbcolors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 154, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)", ]
var pickedcolor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedcolor;
for(var i =0 ; i<colors.length;i++) {
    colors[i].style.backgroundColor = rgbcolors[i];
    colors[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedcolor){
           message.textContent = "Correct!";
           changecolor(clickedColor);
       }else{
           message.textContent = "Try again!";
           this.style.backgroundColor = "#232323";
       }
    });
}
function changecolor(color) {
    for(var i=0;i<colors.length;i++) {
        colors[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random() * rgbcolors.length);
    return rgbcolors[random];


}