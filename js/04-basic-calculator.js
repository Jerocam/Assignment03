//DECLARATION VARIABLES
let number1 = 0;
let number2 = 0;
let operator;
let result1 = errorCheck1(number1);
let result2 = errorCheck2(number2);
let result3 = errorCheck3(operator);
let total = calculate(result1, result2, result3);

//FUNCTION FOR CHECKING IF A USER ENTERS A NUMBER, THEN IT WILL PASS THE VALUE FOR THE FINAL RESULT
function errorCheck1(firstNumber){
    do{
        firstNumber = parseFloat(window.prompt("Enter a number"));
        if (isNaN(firstNumber)){                                //if a user type any instead numbers, it will display error as invalid
            window.alert("ERROR! Please type only numbers");
        }
        else{
            return firstNumber;                                 //if correct input, it will return the value to result
        } 
    }while(isNaN(firstNumber));    //it ends while when the value is correct like numbers
}

//FUNCTION FOR CHECKING IF A USER ENTERS A SECOND NUMBER, THEN IT WILL PASS THE VALUE FOR THE FINAL RESULT
function errorCheck2(secondNumber){
    do {
        secondNumber = parseFloat(window.prompt("Enter a second number"));
        if (isNaN(secondNumber)){                   //if a user type any instead numbers, it will display error as invalid
            window.alert("ERROR! Please type only numbers");}
        else{
            return secondNumber;                   //if correct input, it will return value to result
        }  
    }while(isNaN(secondNumber)); //it ends while when the value is correct like numbers
}

//FUNCTION FOR CHECKING IF A USER ENTERS A OPERATOR (+,-,* AND /), THEN IT WILL PASS THE VALUE FOR THE FINAL RESULT
function errorCheck3(opNumber){
    do {
        opNumber = window.prompt("Enter an arithmetic operator for calculating two numbers");
        if (opNumber!=='+' && opNumber!=='/' && opNumber!=='-' && opNumber!=='*'){   //if a user type any instead one of 4 operators, it will display error as invalid
            window.alert("ERROR! Please type only arithmetic operators like '+, - , * or /' ");}
        else{
            return opNumber;                                               //if correct input, it will return value to result
        }  
    }while(opNumber!=='+' && opNumber!=='/' && opNumber!=='-' && opNumber!=='*');
}


//FUNCTION FOR CALCULATING THE VALUES FROM THE FINAL RESULTS
function calculate(fResult1, fResult2, fResult3){
    let = sumTotal = 0;
    switch (fResult3){
        case "+":
        sumTotal = fResult1+fResult2;
        window.alert(sumTotal);
        break;
        
        case "-":
        sumTotal = fResult1-fResult2;
        window.alert(sumTotal);
        break;
        
        case "/":
        sumTotal = fResult1/fResult2;
        window.alert(sumTotal.toFixed(2));    
        break;

        default:
        sumTotal = fResult1*fResult2;
        window.alert(sumTotal); 
        break;
    }

}
