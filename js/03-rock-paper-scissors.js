
//DECLARATION VARIABLES
let choice1;
let choice2 = Math.floor(Math.random()*3);
let error = errorCheck(choice1);
let result1 = error;
let result2 = fin(choice2);
let final = finalResult(result1, result2);


//FUNCTION FOR CHECKING IF A USER ENTERS ROCK, PAPER OR SCISSORS, THEN IT WILL PASS VALUES FOR THE FINAL RESULT
function errorCheck(choice){

    do{
        choice = window.prompt("Rock, paper or scissors?"); 
        if (choice!=="rock" && choice!=="paper" && choice!=="scissors"){   //if a user type any instead rock, paper or scissors, it will display error as invalid
            window.alert("ERROR! Please type only 'rock', 'paper' or 'scissors'");
        }
        else{
            return choice;                                               //if correct input, it will return value to result
        } 
    
    }while(choice!=="rock" && choice!=="paper" && choice!=="scissors");    //it ends while when the input is correct like rock, paper or scissors

}

//FUNCTION FOR RANDOM NUMBERS FOR MATCHING 0, 1 AND 2 AS ROCK, PAPER AND SCISSORS THEN PASSES THESE VALUES TO THE RESULTS
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

//FUNCTION FINAL RESULT BY A USER VS A COMPUTER PLAYING ROCK, PAPER OR SCISSORS
function finalResult (player1, player2) {

    if (player1 === "paper") {

        if (player2==="paper"){
            document.write("TIED!") ;
        }
        else if (player2 === "rock") {
            document.write("You win! - Computer(rock)") ;
        } 
        else {
            if (player2 === "scissors") {
                document.write("You lost! - Computer(scissors)") ;
            }
        }
    }
    
    if (player1 === "scissors") {

        if (player2==="scissors"){
            document.write("TIED!") ;
        }
        else if (player2 === "rock") {
            document.write("You lost! - Computer(rock)") ;
        } 
        else {
            if (player2 === "paper") {
                document.write("You win! - Computer(paper)") ;
            }
        }
    }

    else {

        if (player1 ==="rock"){
            if (player2 === "rock") {
                document.write("TIED!") ;
            } 
            else if (player2 === "paper"){
                    document.write("You lost! - Computer(paper)") ;
            }
            else {
                if (player2==="scissors"){
                document.write("You win! - Computer(scissors)");
            }
            }
        }
    }

}








//It is other way of conditional but it is very long code!

/*  function finalResult (player1, player2) {
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
*/