// CREATING A BASIC FUNCTION
// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
// }
  
// sayHello();

//ANONYMOUS FUNCTION(FUNCTION LITERAL)
// let sayHi = function() {
//     let varInFunction = "I'm in a function.";
//     console.log("hi there!", varInFunction);
// };

// sayHiOmatsola();

//let addNumbers = (x = 2, y = 3, z = 4) => console.log(x + y + z);




// function addNumbers(x = 2, y = 3, z = 4) {
//     return console.log(x + y + z);
// }
// let arg1 = 1;
// let arg2 = 2;

// addNumbers(1, 2);
//addNumbers();
//addNumbers();
//addNumbers(x = 3);
//addNumbers();

//USING PARAMETERS IN A FUNCTION
// function calculateAge(birthYear) {
//     console.log(2024 - birthYear);
// }

// let calculateAge = birthYear => console.log(2024 - birthYear);


// calculateAge(2000);

//SPREAD OPERATOR
// spreads out arguments or elemnts of an array
// let spread = ["Welcome", "To", "NIIT"];
// let final = ["Hello", "Omatsola", ...spread, "How", "Can I help"];

// console.log(final);

// function addTwoNumbers(x, y, z, a) {
//     console.log(x + y + z + a);
// }
// let arr = [5, 10];
// let arr2 = [15, 20];
// addTwoNumbers(...arr, ...arr2);

//REST PARAMETER
// function someFunction(param1, ...param2) {
//     console.log(param1, param2);
// }

// someFunction("Hi", "There", "My", "name,", "is", "shola");

//RETURN VALUES
// function addTwoNumbers(x, y) {
//    return x + y;
// }


// SAME FUNCTION TRANSLATED INTO ARROW FUNCTION
//let addTwoNumbers = (x, y) => x + y;

// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
// }

// let final = addTwoNumbers(5, 5);
// console.log(final);

//LOCAL VARIABLE IN SCOPE
// function testAvailability(x) {
//     console.log("Available here:", x);
// }

// // tested a variable in scope
// testAvailability("Omatsola!");

// //test a variable out of scope
// console.log(x);

// function testAvailability() {
//     let y = "Omatsola";
//     // testing variable from inside a function
//     console.log("Available here:", y);
// }

// testAvailability();
// //testing y from outside the function
// console.log("from outside the fuction: ", y);

// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }

// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {
//   console.log("Access to global vars inside function." , globalVar);
// }

// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// IMMEDIATELY INVOKED FUNCTION(IIFE)
(function(){
    console.log("hello OMATSOLA");
})();


