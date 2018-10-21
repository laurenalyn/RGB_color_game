let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255 , 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

let squares = document.querySelectorAll(".square");
//style.background currently doesn't work in firefox. use .backgroundColor instead
for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i]
} 