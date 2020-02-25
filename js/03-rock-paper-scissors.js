
let choice = window.prompt("Rock, paper or scissors?");
let choice2 = Math.floor(Math.random()*3);
let result1 = choice;
let result2 = fin(choice2);

function fin (dados){
    if (dados==0){
        return "rock";
    }

    else if (dados==1){
        return "paper";
    }

    else {
        return "scissors";
    }
}
/*
function cplayer (playChoice){
    if (playChoice=="rock"){
        return 0;
    }
    else if (playChoice=="paper"){
        return 1;
    }
    else if (playChoice=="scissors"){
        return 2;
    }

    else {
        document.write("nada");
    }

}*/


let final = finalResult(result1, result2); 


function finalResult (player1, player2) {

    if ((player1=="rock")&&(player2=="paper")){
        alert("You lost");
         document.write(player1+"<br>"); 
         document.write(player2);}

    else if ((player1=="rock")&&(player2=="scissors")){
        alert("You win");
        document.write(player1+"<br>"); 
        document.write(player2);
    }

    else if ((player1=="rock")&&(player2=="rock")){
        alert("tied");
        document.write(player1+"<br>"); 
        document.write(player2);
    }

    else if ((player1=="paper")&&(player2=="rock")){
        alert("You Win!");
        document.write(player1+"<br>"); 
        document.write(player2);
    }
 
    else if ((player1=="paper")&&(player2=="scissors")){
        alert("You lost!");
        document.write(player1+"<br>"); 
        document.write(player2);
    }

    else if ((player1=="paper")&&(player2=="paper")){
        alert("tied");
        document.write(player1+"<br>"); 
        document.write(player2);
    }

    else if ((player1=="scissors")&&(player2=="rock")){
        alert("you lost");
        document.write(player1+"<br>"); 
        document.write(player2);
    }

    else if ((player1=="scissors")&&(player2=="paper")){
        alert("You Win!");
        document.write(player1+"<br>"); 
        document.write(player2);
    }

    else if ((player1=="scissors")&&(player2=="scissors")){
        alert("tied");
        document.write(player1+"<br>"); 
        document.write(player2);
    }
    else {
        document.write("P2 WON");
    }

       
}

/*
if (choice1 === "paper") {
    if (choice2 === "rock") {
        return "paper wins";
    } else {
        if (choice2 === "scissors") {
            return "scissors wins";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            if (choice2 === "paper") {
                return "scissors wins";
            }
        }
    }
}