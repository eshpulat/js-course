"use strict";
/*
 let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;

if (hasDriversLicense) console.log("i can drive ;D"); */

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
