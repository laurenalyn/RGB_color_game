let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255 , 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay"); //style.background currently doesn't work in firefox. use .backgroundColor instead
let messageDislay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            messageDislay.textContent = "Correct!"
            changeColors(clickedColor);
        } else {
            // fades incorecct color out to eliminate that choice"
            this.style.backgroundColor = "#232323";
            messageDislay.textContent = "Try Again";
        }
    });
} 

function changeColors(color){
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
        // change each color to match a given color
        squares[i].style.backgroundColor = color;
        console.log(squares[i].style);
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

