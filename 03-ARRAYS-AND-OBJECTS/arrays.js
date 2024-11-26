// var friend1 = "Jude";
// let friend2 = "Destiny";
// let friend3 = "Amara";
// let friend4 = "Elvis";

// console.log(friend1);
// console.log(friend2);
// console.log(friend3);
// console.log(friend4);

//CREATING AN ARRAY
let friends = new Array("Jude", "Destiny", "Amara", "Elvis", "Dasola");

//let friends = ["Jude", "Destiny", "Amara", "Elvis", "Dasola"];

// let dataTypes = new Array(1, "Destiny", true, undefined, null, Symbol("JavaScript is fun!"), 90071992547409920n);

// let dataTypes = [1, "Destiny", true, undefined, null, Symbol("JavaScript is fun!"), 90071992547409920n];

// CREATING AN EMPTY ARRAY
// let friends = new Array(10);

//let friends = [,,,,,,,,,,];

//console.log("LIST OF FRIENDS", friends);

//console.log(dataTypes);

//console.log("ONE SINGLE FRIEND: ", friends[4]);

//UPDATING AN ARRAY ITEM
//friends[2] = "Petrus";

//console.log(friends.length);

//ADD AN ITEM TO OUR ARRAY
// friends.push("Kewe");

 //console.log("FRIENDS LIST: ", friends);

// REMOVE AN ITEM FROM THE ARRAY
// friends.pop();

//friends.pop();


//friends.reverse();

// let firstNums = [1, 2, 3];
// let secondNums = [4, 5, 6];
// let thirdNums = [7, 8, 9];

//MULTIDIMENSIONAL ARRAY
let arrayOfArrays = [[1, 2, [["Jude", true, undefined], 21, 22]], [4, 5, 6], [7, 8, 9]];

arrayOfArrays.splice(1, 0, [10, 11, 12]);

// arrayOfArrays.push([10, 11, 12]);

// arrayOfArrays.pop();

//console.log(arrayOfArrays[0][2][0][0]);

//console.log(arrayOfArrays[1][1]);

//arrayOfArrays[0][2][1] = "Elvis";

//console.log(arrayOfArrays);

//let finalNums = firstNums.concat(secondNums);

//console.log(finalNums);

//console.log("FRIENDS LIST: ", friends);

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon", "hexagon", "octagon", "nonagon"];

// arrOfShapes.splice(2, 1, "square", "trapezoid");

// arrOfShapes.splice(3, 3, "square", "trapezoid");

//console.log(arrOfShapes.sort());


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

let results = arr.map(x => x * 10);

console.log(results);