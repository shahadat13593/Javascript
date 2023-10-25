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

// ! Type Conversion and Coercion

// * Type Conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("shahadat")); // NaN = Invalid Number
// console.log(typeof NaN);

// console.log(String(22), 22);

// * Type Coercion

// console.log("I am " + 22 + " years old!");
// console.log("I am " + "22" + " years old!"); // same

// console.log("23" + 10 + "3");
// console.log("23" - 10 - "3");

// console.log("22" * 2);
// console.log("23" / 2);

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// console.log(2 + 3 + 4 + "5");
// console.log("10" - "4" - "3" - 2 + "5");

// ! Truthy and Falsy Values

// ? There are Five falsy value: 0, " ", Undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(""));
// console.log(Boolean("Shahadat"));
// console.log(Boolean({}));

// const money = 34;
// if (money) {
//   console.log("You can buy anything which is under $" + money + ".");
// } else {
//   console.log(`You can't buy anything`);
// }

// let height = 0;
// if (height) {
//   console.log("Height is defined!");
// } else {
//   console.log("Height is undefined!");
// }

// ! Equality Operators == vs. ===

// const age = "18";

// if (age === 18) console.log("You just became an adult! (===)");
// if (age == 18) console.log("You just became an adult!(==)");
// // console.log(age === 18);
// // console.log(age === 19);

// const favorite = Number(prompt("What's your  favorite Number? "));

// console.log(favorite, typeof favorite);
// if (favorite === 23) {
//   console.log("Cool! 23 is an amazing number..");
// } else if (favorite === 7) {
//   console.log("Cool! 7 is an amazing number..");
// } else {
//   console.log("Number is not 7 or 23!");
// }

// if (favorite !== 23) {
//   console.log("Why not 23!");
// }

// ! Logical Operator (AND, OR & NOT)

// const hasDriverLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(hasDriverLicense && !hasGoodVision);

// if (hasDriverLicense && hasGoodVision) {
//   console.log(`Shahadat is able to dive!`);
// } else console.log(`Someone else should drive! `);

// const isTried = false; // C

// console.log(hasDriverLicense && hasGoodVision && isTried);

// if (hasDriverLicense && hasGoodVision && !isTried) {
//   console.log(`Shahadat is able to dive!`);
// } else {
//   console.log(`Someone else should drive! `);
// }

// ! Coding Challenge #3

// * test data 1
// const dolphinsAverage = (96 + 108 + 89) / 3;
// const koalasAverage = (88 + 91 + 110) / 3;

// * test data 2
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 123) / 3;

// * test data 3
// const dolphinsAverage = (97 + 112 + 101) / 3;
// const koalasAverage = (109 + 95 + 106) / 3;

// if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
//   console.log(
//     `Dolphins average score is ${dolphinsAverage.toFixed(
//       2
//     )}, Koalas average score is ${koalasAverage.toFixed(
//       2
//     )}. So Dolphin is winner 🎉🏆`
//   );
// } else if (koalasAverage > dolphinsAverage && koalasAverage >= 100) {
//   console.log(
//     `Koalas average score is ${koalasAverage.toFixed(
//       2
//     )}, Dolphins average score is ${dolphinsAverage.toFixed(
//       2
//     )}. So Koalas is winner 🎉🏆 `
//   );
// } else if (
//   dolphinsAverage === koalasAverage &&
//   dolphinsAverage >= 100 &&
//   koalasAverage >= 100
// ) {
//   console.log(`Its a draw!🎎`);
// } else {
//   console.log("The didn't fulfil the minimum requirement, so no one win the trophy!");
// }

// !  The switch Statement

// const day = "monday";

// switch (day) {
//   case "monday": // day === "monday"
//     console.log("Plan to learn javaScript!");
//     console.log("Have to go to University!");
//     break;

//   case "tuesday":
//     console.log("Prepare for exam!");
//     break;

//   case "wednesday":
//   case "thursday":
//     console.log("Learn english!");
//     break;

//   case "friday":
//     console.log("Day off!");
//     break;

//   case "saturday":
//   case "sunday":
//     console.log("Have to learn Machine Learning!");
//     break;

//   default:
//     console.log("Not a valid day!");
// }

// ! Statements and Expressions
// * An Expression is a pice pf code that produces a value
// 3 + 4;
// 2001;
// (true && false) || !false;

// * Statement is a bigger pice of code that is executed and which not produce  a value on itself

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// const me = "Shahadat";
// console.log(`I'm ${2023 - 2001} years old!. ${me}`);

// ! The Conditional (Ternary) Operator

// const age = 23;
// // age >= 18
// //   ? console.log("I like to drink wine!")
// //   : console.log("I like to drink water!");

// // const drink = age >= 18 ? "wine🍺!" : "tea☕!";
// // console.log(`I like to drink ${drink}`);

// console.log(`I like to drink ${age >= 18 ? "wine!" : "water!"}`);

// const bill = 430;
// // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const tip = 50 >= bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${(
//     bill + tip
//   ).toFixed(2)}`
// );

// ? ------------------------ End ------------------------
