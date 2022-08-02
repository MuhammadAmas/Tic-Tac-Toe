let player1  = [null, null, null, null, null, null, null, null, null];
let player2  = [null, null, null, null, null, null, null, null, null];

document.querySelector('.start-button').addEventListener('click', startGame);
function startGame(){
    alert("You can Start the Game!")
}


let mark = 'O';
let val = 0;
let playerNumber =1;
function marker(){
    if(val%2 == 0){
        mark = 'X'
        playernumber =1;
    }else{
        mark = 'O'
        playernumber =2;

    }
    val+=1
    return {mark,
    playerNumber};
}


function clicked(boxNumber){
    // console.log(boxNumber,"pressed");
  
    document.querySelector(`.button${boxNumber+1}`).innerHTML = `${marker().mark}`;
player1[1] =1;

    pseudo = `player${playerNumber}`;
    pseudo[boxNumber] = 1;
    document.querySelector(`.button${boxNumber+1}`).disabled = true;
    // console.log(arr)


    // if ((arr[0]&&arr[1]&&arr[2])||(arr[3]&&arr[4]&&arr[5])||(arr[6]&&arr[7]&&arr[8])||(arr[0]&&arr[3]&&arr[6])||(arr[1]&&arr[4]&&arr[7])||(arr[2]&&arr[5]&&arr[8])||(arr[0]&&arr[4]&&arr[8])||(arr[2]&&arr[4]&&arr[6]) == 1){
    //     console.log('You Won');
    // }
    console.log('player1',player1);
    console.log('player2',player2);
}



