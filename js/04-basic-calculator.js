//DECLARATION VARIABLES
let number1 = 0;
let number2 = 0;
let operator;
let result = errorCheck(number1);
let result2 = errorCheck2(number2);
let result3 = errorCheck3(operator);
let total = calculate(result, result2, result3);

//FUNCTION FOR CHECKING IF A USER ENTERS ROCK, PAPER OR SCISSORS, THEN IT WILL PASS VALUES FOR THE FINAL RESULT
function errorCheck(firstNumber){
    do{
        firstNumber = parseInt(window.prompt("Enter a number"));
        if (isNaN(firstNumber)){   //if a user type any instead rock, paper or scissors, it will display error as invalid
            window.alert("ERROR! Please type only numbers");
        }
        else{
            return firstNumber;                                               //if correct input, it will return value to result
        } 
    }while(isNaN(firstNumber));    //it ends while when the input is correct like rock, paper or scissors
}

function errorCheck2(secondNumber){
    do {
        secondNumber = parseInt(window.prompt("Enter a second number"));
        if (isNaN(secondNumber)){   //if a user type any instead rock, paper or scissors, it will display error as invalid
            window.alert("ERROR! Please type only numbers");}
        else{
            return secondNumber;                                               //if correct input, it will return value to result
        }  
    }while(isNaN(secondNumber));
}

function errorCheck3(opNumber){
    do {
        opNumber = window.prompt("Enter an arithmetic operator for calculating two numbers");
        if (opNumber!=='+' && opNumber!=='/' && opNumber!=='-' && opNumber!=='*'){   //if a user type any instead rock, paper or scissors, it will display error as invalid
            window.alert("ERROR! Please type only arithmetic operators like '+, - , * or /' ");}
        else{
            return opNumber;                                               //if correct input, it will return value to result
        }  
    }while(opNumber!=='+' && opNumber!=='/' && opNumber!=='-' && opNumber!=='*');
}

function calculate(fResult1, fResult2, fResult3){
    let = sumTotal = 0;
    switch (fResult3){
        case "+":
        sumTotal = fResult1+fResult2;
        window.alert(sumTotal);
        default:
        sumTotal = fResult1-fResult2;
        window.alert(sumTotal);
    }
    

}