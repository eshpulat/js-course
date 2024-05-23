"use strict";
/*
 let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("i can drive ;D"); 

// function declaration:
function calcAge1(birthday) {
    return 2031 - birthday;
}
const age1 = calcAge1(1991);

// function expression

const calcAge2 = function (birthday) {
    return 2031 - birthday;
};
const age2 = calcAge2(1991);

console.log(age1, age2);

// Arrow function

const calcAge3 = (birthYear) => 2031 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearUntilRetairment = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirment = 65 - age;
    return `${firstName} retires in ${retirment} years`;
};
console.log(yearUntilRetairment(1991, "john"));

// function calling other function

function cutFruitPiece(fruit) {
    return 4 * fruit;
}

function fruitProcessor(orang, banana) {
    const orangPieces = cutFruitPiece(orang);
    const bananaPieces = cutFruitPiece(banana);

    const juice = `Juice with ${orangPieces} piece of orang and ${bananaPieces} piece of banana`;
    return juice;
}

console.log(fruitProcessor(2, 4));

function calcAverage(score1, score2, score3) {
    const aveScore = (score1 + score2 + score3) / 3;
    return aveScore;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

if (scoreDolphins > scoreKoalas) {
    console.log(`Dolphins win (${scoreDolphins}`);
} else {
    console.log(`koalas win ${scoreKoalas}`);
}

// intraduction Arrays

const friend1 = "Michele";
const friend2 = "Peter";
const friend3 = "John";

const friends = ["Michele", "Peter", "John"];
console.log(friends);

const years = new Array(1991, 2000, 2005, 2010, 2024);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "jay";
console.log(friends);

const firstName = "Johnas";
const johnas = [firstName, "jshiudhjo", 2024 - 1999, "teacher", friends];
console.log(johnas);
console.log(johnas.length);

// exersize

const calcAge = function (birthyear) {
    return 2037 - birthyear;
};
const years1 = [1990, 2000, 2010, 2020, 2030];

const age4 = calcAge(years1[0]);
const age5 = calcAge(years1[1]);
const age6 = calcAge(years1[years1.length - 1]);

console.log(age4, age5, age6);

const ages = [
    calcAge(years1[0]),
    calcAge(years1[1]),
    calcAge(years1[years1.length - 1])
];
console.log(ages); 

// Basic arrays

const friends = ["Michele", "Peter", "John"];
friends.push("joy");
console.log(friends);

friends.unshift("john");
console.log(friends);

friends.pop();
const poped = friends.pop();
console.log(poped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Peter"));
console.log(friends.indexOf("bob"));

console.log(friends.includes("Peter"));
console.log(friends.includes("bob"));

if (friends.includes("Peter")) {
    console.log("you have a friend called Peter");
} 

// Assignment

function calcTip(number) {
    if (number >= 50 && number <= 300) {
        return number * 0.15;
    } else {
        return number * 0.2;
    }
}
const bills = [555];

const tips = [calcTip(bills)];

const total = bills[0] + tips[0];
console.log(total); 

// object arrays

const jonas = {
    firstName: "jonas",
    lastName: "jonatan",
    age: 2024 - 1999,
    job: "teacher",
    friends: ["micheal", "peter", "steven"]
};

console.log(jonas);
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
    "do you want to know about jonas? Choose between firstName, lastName, age, job, and friends "
);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log(
        "wrong request! Choose between firstName, lastName, age, job, and friends"
    );
}

jonas.location = "uzbekisatn";
jonas["instagram"] = "@m.eshpulatov";

console.log(jonas); 

// object method

const jonas = {
    firstName: "jonas",
    lastName: "jonatan",
    birthYeah: 1991,
    job: "teacher",
    friends: ["micheal", "peter", "steven"],
    hasDriverLicense: true,

    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah;
    // }

    // calcAge: function () {
    //     return 2037 - this.birthYeah;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    }
};

console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age); 

// for loop

// console.log("lifting weights repetation 1 😄");
// console.log("lifting weights repetation 2 😄");
// console.log("lifting weights repetation 3 😄");
// console.log("lifting weights repetation 4 😄");
// console.log("lifting weights repetation 5 😄");
// console.log("lifting weights repetation 6 😄");
// console.log("lifting weights repetation 7 😄");
// console.log("lifting weights repetation 8 😄");
// console.log("lifting weights repetation 9 😄");

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`"lifting weights repetation ${rep} 😄"`);
// }

// loops arrays

const jonas = [
    "jonas",
    "jonatan",
    2024 - 1999,
    "teacher",
    ["micheal", "peter", "steven"]
];
const types = [];

for (let i = 0; i < 5; i++) {
    console.log(jonas[i]);
    console.log(jonas[i], typeof jonas[i]);

    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2020, 1989, 2024];
const age = [];

for (let i = 0; i < years.length; i++) {
    age.push(2037 - years[i]);
}
console.log(age); */
