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
