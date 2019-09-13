var content = document.querySelector("#board");

const newGameButton = document.querySelector("#new_game_button")
.addEventListener("click", () => {
    newGame();
});

//   N >= min       N < max    |||| Generate a random number
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Start a new game
function newGame() {
    content.innerHTML = "";
    for(i = 0; i < 10; i++) {
        for (n = 0; n < 10; n++) {
            const randInt = randomInt(1, 3);
            let html;
            switch (randInt) {
                case 1:
                    html = `<div class="square filled"></div>`;
                    break;
                case 2: 
                    html = `<div class="square empty"></div>`;
                    break;
                case 3:
                    html = `<div class="square crossed"></div>`;
                    break;
                default:
                    console.log("error");
            }
            //let html = `<div class="square"></div>`;
            content.innerHTML += html;
        }
        let htmli = `<br/>`;
        content.innerHTML += htmli;
    }

    addListeners();
}

function addListeners() {
    var squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("click", () => {
            if (square.style.backgroundColor == "black" || square.style.backgroundColor == "") {
                square.style.backgroundColor = "red";
            }
            else {
                square.style.backgroundColor = "black";
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {

})