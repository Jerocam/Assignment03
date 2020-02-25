
let choice = window.prompt("PLAYER1: Rock, paper or scissors?");
let choice2 = window.prompt("PLAYER2: Rock, paper or scissors?");
let result1 = cplayer1(choice);
let result2 = cplayer2(choice2);

function cplayer1 (playChoice){
    if (playChoice=="rock"){
        return playChoice;
    }
    else if (playChoice=="paper"){
        return playChoice;
    }
    else {
        document.write("nada");
    }

}

function cplayer2 (playChoice2){
    if (playChoice2=="rock"){
        return playChoice2;
    }
    else if (playChoice2=="paper"){
        return playChoice2;
    }
    else {
        document.write("nada");
    }

}


let final = finalResult(result1, result2); 


function finalResult (player1, player2) {
    if (player1=="rock"){
        return player1;
    }

    if (player2=="paper"){
        return player2;
    }

    if (player1>player2){
        document.write("P1 WON");
    }

    else {
        document.write("P2 WON");
    }


}