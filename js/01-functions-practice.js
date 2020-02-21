//STEP 1
/*let number= parseInt(window.prompt("Enter a number for half of this number"));
let result = halfNumber(number);

function halfNumber(half) {
return half/2;
}

document.write("Half of "+number+ " is "+result);

//STEP 2
let number= parseInt(window.prompt("Enter a number for square of that number"));
let result = squareNumber(number);

function squareNumber(square) {
return square*square;
}

document.write("The result of squaring the number "+number+ " is "+result);

//STEP 3
let number= parseInt(window.prompt("Enter a number for percent"));
let number2= parseInt(window.prompt("Enter a second number for percent"));
let result = percentOf(number, number2);

function percentOf(percent, percent2) {
return percent/percent2*100;
}

document.write(+number+" is" +result+ "% of "+number2);

//STEP 4
let number= parseInt(window.prompt("Enter a number for percent"));
let number2= parseInt(window.prompt("Enter a second number for percent"));
let result = findModulus(number, number2);

function findModulus(modulus, modulus2) {
return modulus%modulus2;
}

document.write(+result+" is the modulus of " +number+ " and "+number2);*/

//STEP 5
let number= parseInt(window.prompt("Enter a number"));
let number2= parseInt(window.prompt("Enter a second number"));
let number3= parseInt(window.prompt("Enter a third number"));

let result = sumTotal(number, number2, number3);

function sumTotal(sum1, sum2, sum3) {
    let total=0;
    for (let i = 0; i <arguments.length; i++){
        total += arguments[i];
        
    }return total;
}

document.write("The total of sums are " +result);