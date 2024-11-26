// let rain = false;

// if (rain) {
//     console.log("I'm taking my umbrella when I need to go outside");
// } else {
//     console.log("I can leave my umbrella at home");
// }

// let age =  21;

// if(age < 18) {
//     console.log("We're very sorry, but you can't get in under 18");
//   } else {
//     console.log("Welcome!");
//   }

// let age = 15;
// let cost = 0;
// let message;
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message ="With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message ="A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost "+ cost);


// TERNARY OPRATOR
// let age = 16;

// age < 18 ? console.log("denied") : console.log("allowed");

// USING SWITCH STATEMENT
// let activity = "bad";

// switch(activity) {
//     case "Get up":
//       console.log("It is 6:30AM");
//       break;
//     case "Breakfast":
//       console.log("It is 7:00AM");
//       break;
//     case "Drive to work":
//       console.log("It is 8:00AM");
//       break;
//     case "Lunch":
//       console.log("It is 12:00PM");
//       break; 
//     case "Drive home":
//       console.log("It is 5:00PM");
//       break;   
//     case "Dinner":
//       console.log("It is 6:30PM");
//         break;
//     default:
//       console.log("Time to Sleep");
//         break;
// }

let grade = "A";  
switch(grade){
    case "F":
    case "D":
      console.log("You've failed!");
      break;
    case "C":
    case "B":
      console.log("You've passed!");
      break;
    case "A":
      console.log("Nice!");
      break;
    default:
      console.log("I don't know this grade.");
  }

