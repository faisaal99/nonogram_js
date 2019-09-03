const newGameButton = document.querySelector("#new_game_button")
.addEventListener("click", () => {
    newGame();
});

var content = document.querySelector("#board");

//   N >= min       N < max
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function newGame() {
    content.innerHTML = "";
    for(i = 0; i < 10; i++) {
        for (n = 0; n < 10; n++) {
            let html = `<div class="square"></div>`;
            content.innerHTML += html;
        }
        let html = `<br/>`;
        content.innerHTML += html;
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
