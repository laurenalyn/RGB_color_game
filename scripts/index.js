let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay"); //style.background currently doesn't work in firefox. use .backgroundColor instead
let messageDislay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i ++) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "#232323";
});

hardBtn.addEventListener("click", function() {
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i ++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
        }
    h1.style.backgroundColor = "#232323";    
});

resetButton.addEventListener('click', function() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from arr
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})
colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    // add click listeners to squares
    squares[i].addEventListener("click", function() {
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        console.log(clickedColor, pickedColor);
        if(clickedColor === pickedColor) {
            messageDislay.textContent = "Correct!"

            resetButton.textContent = "Play Again?"

            changeColors(clickedColor);

            h1.style.backgroundColor = clickedColor;
        } else {
            // fades incorecct color out to eliminate that choice"
            this.style.backgroundColor = "#232323";
            messageDislay.textContent = "Try Again";
        }
    });
} 

function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
        // change each color to match a given color
        squares[i].style.backgroundColor = color;
        console.log(squares[i].style);
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

function generateRandomColors(num) {
    // make an array
    let arr = [];
    // add num random colors to arr
    for(let i = 0; i < num; i++) {
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr
}

function randomColor() {
    // pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}