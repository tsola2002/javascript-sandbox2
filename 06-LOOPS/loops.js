// WHILE LOOPS
let number = 0;
let secondNumber = 1;

while (number <= 10) {
  console.log(number);
  number++;
  secondNumber++;
    //++number;
}

// let names = ["Jude", "Elvis", "Amara", "Nkechi", "Arnold", "Destiny"];

// let notFound = true;

// while (notFound && names.length > 0) {
//     if (names[0] === "Nkechi") {
//         console.log("Found the person");

//         notFound = false;
//     } else {
//         names.shift();
//         console.log(names);
//     }

// }

// let a = 5;

// DO WHILE LOOP
// let number;
// do {
//     number = prompt("Please enter a number between 0 and 100: ");
// } while (!(number >= 0 && number < 100));

// let a = 5;

// FOR LOOP
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//   }

// let numbers = [];
// for (let i = 0; i <= 100; i = i + 2){
//     numbers.push(i);
//     console.log(numbers);
// }

// NESTED LOOP
// let arrOfArrays = [];
// for (let i = 0; i < 3; i++){
//     arrOfArrays.push([]);
//     for (let j = 0; j < 7; j++) {
//         arrOfArrays[i].push(j);
//       }
// }

// console.log(arrOfArrays);
// console.info(arrOfArrays);
// console.table(arrOfArrays);
// console.error(arrOfArrays);

// let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];
// for (let i = 0; i < names.length; i++){
//     names[i] = "Hello " + names[i];
// }

// console.log(names);

// FOR OF LOOP
//let names = ["Chantal", "John", "Maxime", "Bobbi", "Jair"];


// for(let name of names){
//     console.log(name);
// }

// // FOR IN LOOP
// let car = {
//     model: "Golf",
//     make: "Volkswagen",
//     year: 1999,
//     color: "black",
// };

// for (let prop in car) {
//     // console.log(car[prop]);
//     console.log(prop);
// }

//CONVETING KEYS OF AN OBJECT INTO AN ARRAY
// let arrKeys = Object.keys(car);
// console.log(arrKeys);

// for(let key of Object.keys(car)) {
//     //console.log(car[key]);
//     console.log(key);
// }


// for(let value of Object.values(car)) {
//     console.log(value);
// }

// THIS CONVERT AN OBJECT INOT A MULTIDIMENSIONAL ARRAY
// let arrEntries = Object.entries(car);
// console.log(arrEntries);

// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     if (i === 4) {
//       break;
//     }
// }

// let cars = [
//     {
//       model: "Golf",
//       make: "Volkswagen",
//       year: 1999,
//       color: "black",
//     },
//     {
//       model: "Picanto",
//       make: "Kia",
//       year: 2020,
//       color: "red",
//     },
//     {
//       model: "Peugeot",
//       make: "208",
//       year: 2021,
//       color: "black",
//     },
//     {
//       model: "Fiat",
//       make: "Punto",
//       year: 2020,
//       color: "black",
//     }
// ];
  
// USING BREAK STATEMENT
// for (let i = 0; i < 7; i++){
//     console.log(i);
//     if(i === 4) {
//         break;
//     }
// }

// for (let i = 0; i < cars.length; i++) {
//     if (cars[i].year >= 2020) {
//       if (cars[i].color === "black") {
//         console.log("I have found my new car:", cars[i]);
//         break;
//       }
//     }
//   }

// CONTINUE STATEMENT
// for(let car of cars){
//     if (car.color !== "black") {
//         continue
//     }
//     if (car.year >= 2020) {
//         console.log("We couldnt get this car: ", car);
//     }
// }

//MULTIPLICATION TABLE

// let finalTable = [];
// let value = 11;
// for (let x = 0; x < value; x++){
//     let temp = [];
//     for (let y = 0; y < value; y++){
//         temp.push(x * y);
//     }
//     finalTable.push(temp)
// }

// console.table(finalTable);
