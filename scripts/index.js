let squares = document.querySelectorAll(".square");
let colorDisplay = document.querySelector("#colorDisplay"); //style.background currently doesn't work in firefox. use .backgroundColor instead
let messageDislay = document.querySelector("#message");
let h1 = document.querySelector('h1');
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares = 6
        // above line is another way to write the if/else statement below
        // if(this.textContent === "Easy"){
        //     numSquares = 3
        // } else {
        //     numSquares = 6
        // } 
        reset();
    });
}

function reset() {
    colors = generateRandomColors(numSquares);
    // pick new random color from arr
    pickedColor = pickColor();
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDislay.textContent = "";
    // change colors of squares
    for(let i = 0; i < squares.length; i++) {

        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "slateblue";
}

resetButton.addEventListener('click', function() {
    reset();
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