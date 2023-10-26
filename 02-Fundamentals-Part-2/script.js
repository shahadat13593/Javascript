"use strict";

// ! Activating Strict Mode

// let hasDriversLicense = false;
// const passTest = true;

// hasDriversLicense = passTest === true ? true : false;

// hasDriversLicense
//   ? console.log("I can drive!")
//   : console.log("i can not drive");

// const interface = "Audio";

// const private = 34;

// ! Functions

// * A function is a simple pice of code that we can reuse over and over again in our code.

// function logger() {
//   // console.log("My name is Shahadat Hossain");
//   return "My name is Shahadat Hossain";
// }

// // calling, running or invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

//   return juice;
// }

// ? Note: here after returning the value: fruitProcessor(5, 0) === `Juice with ${apples} apples and ${oranges} oranges.`

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const appleOrangeJuice = fruitProcessor(2, 3);
// console.log(appleOrangeJuice);

// console.log(`${fruitProcessor(2, 3)}`);
// console.log(`${logger()}`);

// ! Function Declarations vs. Expressions

// ? Note:  Function Declaration

// const age1 = calcAge1(2001);
// console.log(age1); // ! Note: still gonna work

// function calcAge1(birthYear) {
//   const currentYear = 2023;
//   return currentYear - birthYear;
// }

// const age1 = calcAge1(2001);
// console.log(age1);

// ? Note:  Function Expressions

// const age2 = calcAge2(2000);
// console.log(age2);   // ! Note: Won't gonna work

// const calcAge2 = function (birthYear) {
//   const currentYear = 2024;
//   return currentYear - birthYear;
// };

// const age2 = calcAge2(2000);
// console.log(age2);

// ! Arrow Functions

// // const calcAge2 = function (birthYear) {
// //   return 2024 - birthYear;
// // };

// const calcAge3 = (birthYear) => 2023 - birthYear;

// const age3 = calcAge3(2001);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} is going to retires in ${retirement} years!`;
// };

// console.log(yearsUntilRetirement(2001, "Shahadat Hossain"));
// console.log(yearsUntilRetirement(2003, "Raiyan"));

// ! Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   return `Juice with ${applePieces} piece of apples and ${orangePieces} piece of  oranges.`;
// }

// console.log(fruitProcessor(2, 3));

// ! Reviewing Functions

// const calcAge = (birthYear, currentYear) => currentYear - birthYear;

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear, 2023);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     return `${firstName} is going to retires in ${retirement} years!`;
//   } else {
//     return `${firstName} is already retired!`;
//   }
// };

// console.log(yearsUntilRetirement(2001, "Shahadat Hossain"));

// console.log(yearsUntilRetirement(1950, "Raiyan"));

// ! Coding Challenge #1

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const averageOfDolphins = calcAverage(44, 23, 71);
// const averageOfKoalas = calcAverage(65, 54, 49);

// const checkWinner = function (averageOfDolphins, averageOfKoalas) {
//   if (averageOfDolphins >= averageOfKoalas * 2) {
//     console.log(`Dolphins win (${averageOfDolphins} vs. ${averageOfKoalas})`);
//   } else if (averageOfKoalas >= averageOfDolphins * 2) {
//     console.log(`Koalas win (${averageOfKoalas} vs. ${averageOfDolphins})`);
//   } else {
//     console.log(`Don't fulfill the requirement!`);
//   }
// };

// checkWinner(averageOfDolphins, averageOfKoalas);
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// ! Introduction to Arrays

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

//  ? Note: We have two way to create Arrays

//  Example: First Way:
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

//  Example: Second Way:
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);

// console.log(friends[friends.length - 1]); // NOTE: Array is 0 based

// const names = prompt("Write names: ").split(",");

// const nameArray = new Array(...names);
// console.log(nameArray[nameArray.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// ! Note: Only Primitive values are immutable ( side-note: when we declare it with ('const') ), But array is not primitive.

// friends = ["Bob", "Alice"];
// console.log(friends); ( side-note: can't do this )

// const firstName = "Shahadat";
// const shahadat = [firstName, "Hossain", 2023 - 2001, "Student", friends];

// console.log(shahadat);
// console.log(shahadat.length);

//! Exercise
// const calcAge = (birthYear, currentYear = 2023) => currentYear - birthYear;

// const birthYears = [1990, 1967, 2001, 2010, 2018];

// console.log(calcAge(birthYears[2]));
// console.log(calcAge(birthYears[0]));
// console.log(calcAge(birthYears[birthYears.length - 1]));

// const ages = new Array(
//   calcAge(birthYears[2]),
//   calcAge(birthYears[0]),
//   calcAge(birthYears[birthYears.length - 1])
// );

// console.log(ages);

// ! Basic Array Operations (Methods)

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// * Note: push method adds elements to the end of an array

// const newLength = friends.push("Maliha");
// console.log(friends);
// console.log(newLength);

// * Note: unshift method adds elements to the beginning of an array
// friends.unshift("Takwa");
// console.log(friends);

// * Note: pop method remove elements to the end of an array

// friends.pop();
// console.log(friends);

// * Note: shift method remove elements to the beginning of an array

// friends.shift();
// console.log(friends);

// NOTE: find index number
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("bob"));

// NOTE: check if a elements is available or not based on boolean form

// console.log(friends.includes("Shahadat"));

// friends.push(23);
// console.log(friends.includes("23")); // side-note: use (===)
// console.log(friends.includes(23)); // side-note: use (===)

// if (friends.includes("Peter")) {
//   console.log("Do you have friend called Peter?");
// }

// ! Coding Challenge #2

// const calcTip = function (bill, tip1 = 0.15, tip2 = 0.2) {
//   const tip = bill >= 50 && bill <= 300 ? bill * tip1 : bill * tip2;
//   return tip;
// };

// const calcTotalBill = (bills, tips) => bills + tips;

// const bills = new Array(125, 555, 44);
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// console.log(bills);
// console.log(tips);

// const totalBill = new Array(
//   calcTotalBill(bills[0], tips[0]),
//   calcTotalBill(bills[1], tips[1]),
//   calcTotalBill(bills[2], tips[2])
// );

// console.log(totalBill);

// ! Introduction to Objects

// const shahadatArray = [
//   "Shahadat",
//   "Hossain",
//   2023 - 2001,
//   "Shahadat",
//   ["Raiyan", "Maliha", "Zahid"],
// ];

// console.log(shahadatArray);

// const shahadat = {
//   firstName: "Shahadat",
//   lastName: "Hossain",
//   age: 2023 - 2001,
//   job: "Coder",
//   friends: ["Raiyan", "Maliha", "Zahid"],
// };

// console.log(shahadat);

// ! Dot vs. Bracket Notation

// const shahadat = {
//   firstName: "Shahadat",
//   lastName: "Hossain",
//   age: 2023 - 2001,
//   job: "Coder",
//   friends: ["Raiyan", "Maliha", "Zahid"],
// };

// console.log(shahadat);

// * Dot Notation
// console.log(shahadat.lastName);
// console.log(shahadat.age);

// * Bracket Notation

// console.log(shahadat["friends"][0]);
// console.log(shahadat[`lastName`]);
// console.log(shahadat[`${"jo" + "b"}`]); // side-note: isn't it cool😎

// const nameKey = "Name";

// console.log(
//   shahadat[
//     `${
//       shahadat.firstName.length > shahadat.lastName.length
//         ? "first" + nameKey
//         : "last" + nameKey
//     }`
//   ]
// );

// const interestedIn = prompt(
//   "What do you want to know about shahadat? (firstName,lastName,age,job,friends)"
// );

// if (shahadat[interestedIn]) {
//   console.log(shahadat[interestedIn]);
// } else {
//   console.log(`Type an existed Option!`);
// }

// ? adding new property to the Objects

// shahadat.location = "Bangladesh";

// shahadat["email"] = "shahadat15-13593@diu.edu.bd";

// console.table(shahadat);

// console.log(shahadat.friends[0]);

// console.log(
//   `${shahadat.firstName} has ${shahadat.friends.length} friend${
//     shahadat.friends.length > 1 ? "s" : ""
//   }, and his best friend is ${shahadat.friends[0]}`
// );

// ! Object Methods

// const shahadat = {
//   firstName: "Shahadat",
//   lastName: "Hossain",
//   birthYear: 2001,
//   job: "Coder",
//   friends: ["Raiyan", "Maliha", "Zahid"],
//   hasDriverLicense: true,
//   // calcAge: function () {
//   //   // console.log(this);
//   //   const age = 2023 - this.birthYear;
//   //   return age;
//   // },
//   calcAge: function () {
//     // console.log(this);
//     this.age = 2023 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.age}-years old ${
//       this.job
//     }, and he has ${
//       this.hasDriverLicense === true ? "a" : "no"
//     } driver's license`;
//   },
// };

// console.log(shahadat.calcAge());

// console.log(shahadat.age);
// console.log(shahadat.age);
// console.log(shahadat.age);
// // console.log(shahadat["calcAge"]());

// console.log(shahadat.getSummary());

// ! Coding CHALLENGE #3

// const bmiCompare = {
//   fullNameOfMark: "Mark Miller",
//   marksWeights: 78,
//   marksHeight: 1.69,
//   fullNameOfJohn: "John Smith",
//   johnsWeights: 92,
//   johnsHeight: 1.95,
//   calcBMI: function () {
//     this.marksBMI = this.marksWeights / (this.marksHeight * this.marksHeight);
//     this.johnsBMI = this.johnsWeights / (this.johnsHeight * this.johnsHeight);

//     if (this.marksBMI > this.johnsBMI) {
//       return `${this.fullNameOfMark}'s BMI (${this.marksBMI}) higher than ${this.fullNameOfJohn}'s (${this.johnsBMI})!`;
//     } else {
//       return `${this.fullNameOfJohn}'s BMI (${this.johnsBMI}) higher than ${this.fullNameOfMark}'s (${this.marksBMI}!`;
//     }
//   },
// };

// console.log(bmiCompare.calcBMI());
// console.log(bmiCompare.marksBMI);
// console.log(bmiCompare.johnsBMI);

// ! Iteration The for Loop

// console.log(`Lifting weights repetition 1 🏋️‍♂️`);
// console.log(`Lifting weights repetition 2 🏋️‍♂️`);
// console.log(`Lifting weights repetition 3 🏋️‍♂️`);
// console.log(`Lifting weights repetition 4 🏋️‍♂️`);
// console.log(`Lifting weights repetition 5 🏋️‍♂️`);
// console.log(`Lifting weights repetition 6 🏋️‍♂️`);
// console.log(`Lifting weights repetition 7 🏋️‍♂️`);
// console.log(`Lifting weights repetition 8 🏋️‍♂️`);
// console.log(`Lifting weights repetition 9 🏋️‍♂️`);
// console.log(`Lifting weights repetition 10 🏋️‍♂️`);

// * Note: for loop keeps running while condition is true

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// ! Looping Arrays, Breaking and Continuing

// const shahadatArray = [
//   "Shahadat",
//   "Hossain",
//   2023 - 2001,
//   "Shahadat",
//   ["Raiyan", "Maliha", "Zahid"],
//   true,
// ];

// const typeArrayOfShahadat = [];
// for (let i = 0; i < shahadatArray.length; i++) {
//   console.log(shahadatArray[i], typeof shahadatArray[i]);

//   typeArrayOfShahadat.push(typeof shahadatArray[i]);
//   //* typeArrayOfShahadat[i] = typeof shahadatArray[i];
//   // typeArrayOfShahadat.unshift(typeof shahadatArray[i]);
// }

// console.log(typeArrayOfShahadat);

// const birthYears = [1990, 1967, 2001, 2010, 2018];

// const calcAgeMethod = {
//   birthYears: [1990, 1967, 2001, 2010, 2018, 2000],
//   ages: [],
//   currentYear: 2023,
//   calcAge: function () {
//     for (let i = 0; i < this.birthYears.length; i++) {
//       this.ages.push(this.currentYear - this.birthYears[i]);
//     }

//     console.log(this.ages);
//   },
// };

// calcAgeMethod.calcAge();

// const birthYears = [1990, 1967, 2001, 2010, 2018, 2000];
// const calcAge = (birthYear, currentYear = 2023) => currentYear - birthYear;
// const ages = [];
// for (let i = 0; i < birthYears.length; i++) {
//   ages.push(calcAge(birthYears[i]));
// }
// console.log(ages);

// ? Continuing

// * Note: Continue is to exit the current iteration of the loop and go the next iteration

// const shahadatArray = [
//   "Shahadat",
//   "Hossain",
//   2023 - 2001,
//   "coder",
//   ["Raiyan", "Maliha", "Zahid"],
//   true,
// ];

// console.log(`-------- Only String --------`);
// for (let i = 0; i < shahadatArray.length; i++) {
//   if (typeof shahadatArray[i] !== "string") continue;
//   console.log(shahadatArray[i]);
// }

// console.log(`-------- Only String --------`);
// for (let i = 0; i < shahadatArray.length; i++) {
//   if (typeof shahadatArray[i] !== "string") continue;
//   console.log(shahadatArray[i]);
// }

// * Note: Break is used to completely terminate the whole loop

// console.log(`-------- brake when number is found --------`);
// for (let i = 0; i < shahadatArray.length; i++) {
// Example: one way
// console.log(shahadatArray[i]);
// if (typeof shahadatArray[i] === "number") break;

// @ Example: Other way
//   if (typeof shahadatArray[i] === "number") break;
//   console.log(shahadatArray[i]);
// }

// ! Looping Backwards and Loops in Loops

const shahadatArray = [
  "Shahadat",
  "Hossain",
  2023 - 2001,
  "coder",
  ["Raiyan", "Maliha", "Zahid"],
  true,
];

// NOTE Forward
// console.log("----------- forward --------------");

// LINK 0, 1, .... 5

// for (let i = 0; i < shahadatArray.length; i++) {
//   console.log(shahadatArray[i]);
// }
// NOTE backward
// console.log("----------- backward --------------");

// LINK 5, 4, .... 0

// for (let i = shahadatArray.length - 1; i >= 0; i--) {
//   console.log(shahadatArray[i]);
// }

// Note: Loop inside another loop
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---------- Starting Exercise ${exercise} ----------`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
//   }
// }
