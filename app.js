let player1 = [null, null, null, null, null, null, null, null, null];
let player2 = [null, null, null, null, null, null, null, null, null];

document.querySelector('.start-button').addEventListener('click', startGame);

for (let i = 0; i < 9; i++) {
    document.querySelector(`.button${i+1}`).disabled = true;
}

function startGame() {
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.button${i+1}`).disabled = false;
    }
    alert("You can Start the Game!");
    document.querySelector('.start-button').style.backgroundColor = '#EAF6F6';
    document.querySelector('.start-button').style.color = '#06283D';

}

function boxClear(){
    for (let i = 0; i < 9; i++) {
        document.querySelector(`.button${i+1}`).innerHTML = '';
    }
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
        console.log('Player1! You Won');
        alert('Player1! You Won');
        boxClear();
    } else if ((player2[0] && player2[1] && player2[2]) || (player2[3] && player2[4] && player2[5]) || (player2[6] && player2[7] && player2[8]) || (player2[0] && player2[3] && player2[6]) || (player2[1] && player2[4] && player2[7]) || (player2[2] && player2[5] && player2[8]) || (player2[0] && player2[4] && player2[8]) || (player2[2] && player2[4] && player2[6]) == 1) {
        console.log('Player2! You Won');
        alert('Player2! You Won', boxClear());
    }


    console.log('player1', player1);
    console.log('player2', player2);
}





