let player1 = [null, null, null, null, null, null, null, null, null];
let player2 = [null, null, null, null, null, null, null, null, null];

function disableButtons() {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.button${i + 1}`).disabled = true;
    }
}

function startGame() {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.button${i + 1}`).disabled = false;
    }
    alert("You can Start the Game!");
    document.querySelector('.start-button').style.backgroundColor = '#EAF6F6';
    document.querySelector('.start-button').style.color = '#06283D';
}

function replay() {
    boxClear();
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.button${i + 1}`).disabled = false;
        player1[i] = null;
        player2[i] = null;
    }
    document.querySelector('.player-names').innerHTML = `   <div class="player">
                                                                <h3>For Player 1<br>Mark is O</h3>
                                                            </div>
                                                            <div class="player">
                                                                <h3>For Player 2<br>Mark is X</h3>
                                                            </div>`

}

function boxClear() {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.button${i + 1}`).innerHTML = '';
    }
}

function gameTied() {
    count += 1;
    // for (let i = 0; i < 9; i++) {
    //     if (document.querySelector(`.button${i}`).innerHTML = 'X' || document.querySelector(`.button${i}`).innerHTML == 'O') {
    //         count += 1;
    //         console.log(count);
    //     }
    // }
    if (count == 9) {
        document.querySelector('.player-names').innerHTML = '<h3>Game Tied</h3>';
    }
    console.log(count);
}

let mark = 'O';
let val = 2;
function marker() {
    if (val % 2 == 0) {
        mark = 'X';
    } else {
        mark = 'O';
    }
    val += 1
    return {
        mark
    };
}
let count = 0;
function clicked(boxNumber) {
    marker();
    document.querySelector(`.button${boxNumber + 1}`).innerHTML = `${marker().mark}`;

    if (marker().mark == 'X') {
        player1[boxNumber] = 1;
    } else {
        player2[boxNumber] = 1
    }
    document.querySelector(`.button${boxNumber + 1}`).disabled = true;

    if ((player1[0] && player1[1] && player1[2]) || (player1[3] && player1[4] && player1[5]) || (player1[6] && player1[7] && player1[8]) || (player1[0] && player1[3] && player1[6]) || (player1[1] && player1[4] && player1[7]) || (player1[2] && player1[5] && player1[8]) || (player1[0] && player1[4] && player1[8]) || (player1[2] && player1[4] && player1[6]) == 1) {
        count=0;
        disableButtons();
        document.querySelector('.player-names').innerHTML = '<h3>Player1!  You Won</h3>';
    } else if ((player2[0] && player2[1] && player2[2]) || (player2[3] && player2[4] && player2[5]) || (player2[6] && player2[7] && player2[8]) || (player2[0] && player2[3] && player2[6]) || (player2[1] && player2[4] && player2[7]) || (player2[2] && player2[5] && player2[8]) || (player2[0] && player2[4] && player2[8]) || (player2[2] && player2[4] && player2[6]) == 1) {
        count=0;
        disableButtons();
        document.querySelector('.player-names').innerHTML = '<h3>Player2!  You Won</h3>';
    }
    gameTied();
}


document.querySelector('.start-button').addEventListener('click', startGame);
disableButtons();

