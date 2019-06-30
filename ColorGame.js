var colors=[
    "rgb(255, 0, 0)",
    "rgb(0, 255, 0)",
    "rgb(220, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(, 255, 255)",
    "rgb(255, 0, 255)",
]

var squares=document.querySelectorAll(".square");
var pickedColor=colors[3];
var messageDisplay = document.querySelector("#message")
;
for(var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];

    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.background;

        if(clickedColor===pickedColor){
           messageDisplay.textContent="Correct!!";
           changeColors(clickedColor);
        }
        else{
           this.style.background="black";
           messageDisplay.textContent="Try again"
        }
    });
}


function changeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
    
}