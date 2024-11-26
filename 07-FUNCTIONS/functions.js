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
function someFunction(param1, ...param2) {
    console.log(param1, param2);
}

someFunction("Hi", "There", "My", "name,", "is", "shola");
  

