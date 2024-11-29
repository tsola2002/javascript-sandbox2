// DOCUMENT OBJECT MODEL
//console.dir(document.body);


// Basic DOM traversing
// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure);

// console.dir(document.body.children.forest.children.tree1.children.flower);

//console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1]);

// MOVING UP THE DOM STRUCTURE
// console.dir(document.body.children.forest.children.tree2.children.shrubbery.children.treasure.parentElement);

// console.dir(document.body.childNodes[3].childNodes[3].childNodes[1].childNodes[1].parentElement);

// TRAVERSING SIDEWAYS THROUGH THE DOM STRUCTURE
//console.dir(document.body.children.forest.children.tree2.previousElementSibling);

// console.dir(document.body.children.forest.children.tree1.nextElementSibling);


// ADDING TEXT USING INNER TEXT
// document.body.children.forest.children.tree2.children.shrubbery.children.treasure.innerText = "My Treasure";

document.body.children.forest.children.tree2.children.shrubbery.children.treasure.innerHTML = "<strong>My Treasure</strong>";


// Accessing elements in the DOM

// Element click handler

// This and the DOM

// Manipulating element style

// Changing the classes of an element

// Manipulating attributes

// Event listeners on elements

// Creating new elements