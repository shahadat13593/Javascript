"use strict";

// ! Variables and values
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Shahadat");
// console.log(23);

// let firstName = "Raiyan";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let first = "shahadat";
// let firstNamePerson = "raiyan";
// let first_name_person;

// let jonas_shahadat = "jn";
// let newNum = 243;

// let person = "shahadat";
// let PI = 3.1416;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = "Programmer";
// let job2 = "Teacher";

// console.log(myFirstJob);

// ! Data Types
// ? 1. Number : Floating point numbers -> Used for decimals and integers

// ? 2. String : Sequence of characters -> Used for text

// ? 3. Boolean :Logical type that only be true and false -> Used for taking decision

// ? 4. Undefined : Value taken by a variable that is not yet defined (Empty value)

// ? 5. Null : also means Empty value

// ? 6. Symbol(ES2015) : Value that is unique and cannot be changed

// ? 7.BigInt : Larger integers than the Number type can hold

// console.log(true);
// let javaScriptIsFun = true;

// if (javaScriptIsFun) {
//   console.log("Hey! Let's learn javaScript!");
// }
// console.log("--------------------------------");

// console.log(typeof 22);
// console.log(typeof javaScriptIsFun);
// console.log(typeof "shahadat");

// javaScriptIsFun = "YES!";
// console.log("--------------------------------");
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);
// console.log("--------------------------------");

// year = 2001;
// console.log(year);
// console.log("--------------------------------");

// console.log(typeof null);

// ! let, const and var

// let age = 30; // ? let is mutable
// age = 31;

// const birthYear = 2001; //? const is Immutable

// const job;

// var job = "programmer";
// job = "coder";

// lastName = "Hossain"; // ! Never write code like this
// console.log(lastName);

// ! Basic Operators

// ? Arithmetic Operator

// const currentYear = 2023;
// const ageShahadat = currentYear - 2001;
// const ageZala = currentYear - 2000;
// console.log(ageShahadat, ageZala);

// console.log(ageShahadat * 2, ageShahadat / 10, 2 ** 3);

// const firstName = "Shahadat";

// const lastName = "Hossain";

// console.log(firstName + " " + lastName);

// ? Assignment Operator

// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 10 = 100
// x /= 4; // x = x / 10 = 25
// x++; // x = x + 1 = 26
// x--; // x = x - 1 = 25
// x--; // x = x - 1 = 24
// console.log(x);

// ? Comparison Operator

// console.log(ageShahadat > ageZala);
// console.log(ageShahadat < ageZala);
// console.log(ageShahadat >= ageZala);
// console.log(ageShahadat <= ageZala);

// console.log(ageZala >= 18);

// const isFullAge = ageZala >= 18;

// console.log(currentYear - 2001 < currentYear - 2000);

// ? Operator Precedence

// const currentYear = 2023;
// const ageShahadat = currentYear - 2001;
// const ageZala = currentYear - 2000;

// console.log(currentYear - 2001 < currentYear - 2000);

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(x, y);

// const averageAge = (ageShahadat + ageZala) / 2;
// console.log(ageShahadat, ageZala, averageAge);

// ! Coding Challenge #1

// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;
// const markWeights = 95;
// const markHeight = 1.88;
// const johnWeights = 85;
// const johnHeight = 1.76;

// const markBMI = markWeights / (markHeight * markHeight);
// const johnBMI = johnWeights / (johnHeight * johnHeight);

// let markHigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI, markHigherBMI);

// ! Strings and Template Literals

// const firstName = "shahadat";
// const job = "student";
// const birthYear = 2001;
// const year = 2023;

// const shahadat =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

// console.log(shahadat);

// const shahadatNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

// console.log(shahadatNew);

// console.log(`Just a regular String...`);

// console.log(`shahadat,
// I am your inner-self.
// I have a message for you.
// You must start reading from today.`);

// ! Taking Decisions if  else Statements

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log(`Shahadat can start driving...😁`);
// } else {
//   console.log(`Shahadat is not old enough to drive..😌`);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// ! Coding Challenge #2

// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

// // const markWeights = 95;
// // const markHeight = 1.88;
// // const johnWeights = 85;
// // const johnHeight = 1.76;

// const markBMI = markWeights / (markHeight * markHeight);
// const johnBMI = johnWeights / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//   console.log(
//     `Mark's BMI (${markBMI.toFixed(
//       1
//     )} )is higher than John's (${johnBMI.toFixed(1)})!`
//   );
// } else {
//   console.log(
//     `John's BMI (${johnBMI.toFixed(
//       1
//     )} )is higher than Mark's  (${markBMI.toFixed(1)})!`
//   );
// }
