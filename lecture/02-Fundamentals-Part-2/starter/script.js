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
