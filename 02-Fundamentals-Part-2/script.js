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

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const averageOfDolphins = calcAverage(44, 23, 71);
const averageOfKoalas = calcAverage(65, 54, 49);

const checkWinner = function (averageOfDolphins, averageOfKoalas) {
  if (averageOfDolphins >= averageOfKoalas * 2) {
    console.log(`Dolphins win (${averageOfDolphins} vs. ${averageOfKoalas})`);
  } else if (averageOfKoalas >= averageOfDolphins * 2) {
    console.log(`Koalas win (${averageOfKoalas} vs. ${averageOfDolphins})`);
  } else {
    console.log(`Don't fulfill the requirement!`);
  }
};

checkWinner(averageOfDolphins, averageOfKoalas);
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));
