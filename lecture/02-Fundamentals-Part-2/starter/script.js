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
