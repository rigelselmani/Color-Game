var NumSquares=6;
var colors=generateRandomColors(NumSquares);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var messageDisplay=document.getElementById("message");
var colorDisplay=document.querySelector("#colorDipslay")
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    if(this.textContent==="Easy"){
        NumSquares=3;
    }else{
        NumSquares=6;
    }
    reset();
    });
}

function reset(){
    colors=generateRandomColors(NumSquares);

    pickedColor =pickColor();
 
    colorDisplay.textContent=pickedColor;
 
    resetButton.textContent="New Colors"
    messageDisplay.textContent="";
 
    for (var i=0;i<squares.length;i++){
        if(colors[i]){
        squares[i].style.display="block";
        squares[i].style.background=colors[i]
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.background= "steelblue";
}

resetButton.addEventListener("click",function(){
 reset();
});

    colorDisplay.textContent=pickedColor;

for (var i=0;i<squares.length;i++){
    squares[i].style.background=colors[i];
    
    squares[i].addEventListener("click",function(){

        var clickedColor=this.style.background;

        if(clickedColor===pickedColor){
            messageDisplay.textContent="correct";
            resetButton.textContent="Play Again?";
            changeColor(pickedColor);
            h1.style.background=clickedColor;
        }else{
            messageDisplay.textContent="Try Again";
            this.style.background="black";
        }
    })

}

function changeColor(color){
    for (var i=0;i<squares.length;i++){
        squares[i].style.background=color;
    }
}

function pickColor(){
   var random = Math.floor(Math.random() *colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr=[]
    
    for (var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
    function randomColor(){
      var r=Math.floor(Math.random() * 256);
      var g=Math.floor(Math.random() * 256);
      var b=Math.floor(Math.random() * 256);
      return "rgb("+ r +", " +g + ", " + b + ")";
    }