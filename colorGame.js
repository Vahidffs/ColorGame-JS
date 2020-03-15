var colors = document.querySelectorAll(".square");
var rgbcolors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(255, 154, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)",
    "rgb(255, 0, 0)", ]
var pickedcolor = rgbcolors[3];
var colorDisplay = document.getElementById("colorDisplay");

colorDisplay.textContent = pickedcolor;
for(var i =0 ; i<colors.length;i++) {
    colors[i].style.backgroundColor = rgbcolors[i];
    colors[i].addEventListener("click", function(){
       var clickedColor = this.style.backgroundColor;
       if(clickedColor === pickedcolor){
           alert('correct')
       }else{
           alert('wrong')
       }
    });
}
