/*
Javascript Programming Exercise 1
Samarjeet
ITPA 2021
*/
let myFirstIntegerVariable = 4;
let myFirstFloatVarible = 9.9;
let myFirstBooleanVariable = true;
let myFirstName = 'Samarjeet';
let myNullVariable = null;
let myUndefinedVariable;
// This is a line comment
console.log("~~~~~~~~~~~~");
console.log("    Lets work with variable   ");
console.log("~~~~~~~~~~~~~~~~~");
console.log(myFirstIntegerVariable);
console.log(myFirstFloatVarible);
console.log(myFirstName);
console.log(myNullVariable);
console.log(myUndefinedVariable);
//Reassigning Variables
let mySecondInteger = 3;
mySecondInteger = 5;
console.log(mySecondInteger);
console.log("Addition");
let myAddition = myFirstIntegerVariable + mySecondInteger;
console.log(myAddition);
console.log("~~~~~~~~~~~~~~~~~");
console.log("Subtration");
let mySubtraction =mySecondInteger - myFirstIntegerVariable;
console.log(mySubtraction);
console.log("~~~~~~~~~~~~~~~~~");
console.log("Multiply");
let myMultiplication =mySecondInteger * myFirstIntegerVariable;
console.log(myMultiplication);
console.log("~~~~~~~~~~~~~~~~~");
console.log("Division");
let myDivision =mySecondInteger / myFirstIntegerVariable;
console.log(myDivision);
console.log("~~~~~~~~~~~~~~~~~");
console.log ("Int + Float");
let floatAddition = myFirstFloatVarible + myFirstIntegerVariable;
console.log(floatAddition);
console.log("~~~~~~~~~~~~~~~~");
console.log("Integer - Float");
let floatSubtaction = myFirstFloatVariable - myFirstIntegerVariable;
console.log(floatSubtaction);
console.log("~~~~~~~~~~~~~~")
console.log("Integer / Integer = Float");
//Dividing integers implicitly converts to float 
let divideInts = myFirstIntegerVariable / mySecondInteger;
console.log(divideInts);
console.log("~~~~~~~~");
console.log("Integer / Integer = Float");
//Dividing whole numbers results in implicit integer 
let x = 4/2;
console.log(x);
console.log("~~~~~~~~");
console.log("Modulus 6 & 2");
//Calculates the remainder from a divison
let modResult = 6 % 2;
console.log(modResult);
console.log("~~~~~~~~");
console.log("Modulus 13 & 4");
//Calculates the remainder from a divison
let modResult = 13 % 4;
console.log(modResult);
console.log("~~~~~~~~");
console.log("++ Starting at 3");
let a = 3;
a++;
console.log(a);
console.log("~~~~~~~~");
console.log("-- starting at 7");
let b = 7;
b--;
b--;
console.log(b);
console.log("~~~~~~~~");
console.log("Compound += with 3 & 5");
//Compound assignment operators
let myThirdInteger = 3;
myThirdInteger += mySecondInteger;
/*
    Equivalant to:
    myThirdInteger = myThirdInteger + mySecondInteger
*/
console.log(myThirdInteger);
console.log("~~~~~~~~");
console.log("Compound -= with 7 & 5");
//Compound Assignment operators
let myFourthInteger = 7;
myFourthInteger -= mySecondInteger;
/*
    Equivalant to:
    myFourthInteger = myFourthInteger + mySecondInteger
*/
console.log(myFourthInteger);
console.log("~~~~~~~~");