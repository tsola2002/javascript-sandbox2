// let person = [
//     "Omatsola",
//     "Sobotie",
//     1985,
//     "Instructor",
//     ["Destiny", "Elvis", "Jude"]
// ];

//CREATING AN OBJECT
let person = {
    firstName: "Omatsola",
    lastName: "Sobotie",
    yearOfBirth: 1985,
    profession: "Instructor",
    friends: ["Destiny", "Elvis", "Jude"]
};

let dog = {
    dogName: "Snoop Dogg",
    weight: 2.4,
    color: "brown",
    breed: "Pitbull",
    age: 3,
    burglarBiter: true
}

// Accessing values of an object
//console.log(dog);

// Accessing a single value of an object
// console.log(dog.age);
// console.log(dog["age"]);

// dog.dogName = "Nate Dogg";
// dog.burglarBiter = false;

// console.log(dog);

// CREATING OBJECTS INSIDE AN OBJECT
// CREATING ARRAYS INSIDE AN OBJECT
let company = {
    companyName: "Dangote",
    activities: [
        "Manufacturing",
        "Fuel Processing",
        {
            Individual: "Single Business",
            Enterprise: "Corporate Business",
            Other: [
                ["Telesales", "Online Sales", "Cold Calling"],
                "Sales",
                "Marketing",
                "Digital",
                "Global"
            ]
        },
        "Cement",
        "Food Items"
    ],
    address: {
        streetNumber: 12,
        streetName: "Falomo Bridge",
        city: "Ikoyi",
        state: "Lagos"
    },
    yearOfEstablishment: 2021
};

// console.log(company);
//ACESSING OBJECT INSIDE AN OBJECT
//console.log(company.address.city);
console.log(company.activities[2].Other[0][2]);


//console.log(company.activities[2].Enterprise);


// CREATING OBJECTS INSIDE AN ARRAY
let addresses = [
    {
        street: "2nd street",
        number: "123",
        zipcode: "33116",
        city: "Miami",
        state: "Florida"
    },
    {
        street: "1st West avenue",
        number: "5",
        zipcode: "75001",
        city: "Addison",
        state: "Texas"
    }
];

console.log(addresses);