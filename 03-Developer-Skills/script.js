// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = '23';

// const calcAge = birthYear => 2023 - birthYear;

// ! How to solve Problem

// BUG: PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// ! ------------------------------
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// ? 1) Understanding the problem

// FIXME What is temperature amplitude?
// Answer:   Different Between Height and Lowest temperature

// FIXME How to compute max and min Temperature?

// FIXME What a sensor error and what to do when one occur?

// ? 2) Breaking up into problem

// FIXME: How to Ignore errors?

// FIXME:  how to find max value in temp array

// FIXME:  how to find min value in temp array

// FIXME:  Subtract min from max and return it

// ! ------------------------------

// const calcTempAmplitude = function (temp) {
//   let min = 0;
//   let max = 0;
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;

//     if (min > temp[i]) {
//       min = temp[i];
//     }
//     if (max < temp[i]) {
//       max = temp[i];
//     }
//   }

//   const tempAmplitude = max - min;

//   return `The maximum Temperature is ${max} and the minimum Temperature is ${min}. The temperature amplitude is ${tempAmplitude}.`;
// };

// // calcTempAmplitude(temperatures);
// console.log(calcTempAmplitude(temperatures));

// BUG: PROBLEM 2:
// Function new receive 2 arrays of temp

// ? 1) Understanding the problem

// FIXME With 2 array , should we need to implement same functionality twice

// Answer: Just marge 2 arrays

// ? 2) Breaking up into problem

// FIXME: How to marge 2 arrays

// * ----------------------------------- Raf ------------- -----------

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [67, 87, -22, 5, 6, 7];

// const temps = [];
// // const lengthOfTemps =
// //   temperatures.length > temperatures2.length
// //     ? temperatures.length
// //     : temperatures2.length;

// for (let i = 0; i < temperatures.length; i++) {
//   temps.push(temperatures[i]);
// }
// for (let i = 0; i < temperatures2.length; i++) {
//   temps.push(temperatures2[i]);
// }

// console.log(temps);

// ANSWER  ------------------------- ---------

// ? ---------- One way ----------

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temp1, temp2) {

// ANCHOR Use Loops

//   const temp = [];

//   for (let i = 0; i < temp1.length; i++) {
//     temp.push(temp1[i]);
//   }
//   for (let i = 0; i < temp2.length; i++) {
//     temp.push(temp2[i]);
//   }
//   console.log(temp);

//   let min = 0;
//   let max = 0;
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;

//     if (min > temp[i]) {
//       min = temp[i];
//     }
//     if (max < temp[i]) {
//       max = temp[i];
//     }
//   }

//   const tempAmplitude = max - min;

//   return `The maximum Temperature is ${max} and the minimum Temperature is ${min}. The temperature amplitude is ${tempAmplitude}.`;
// };

// console.log(calcTempAmplitude(temperatures, [67, 87, -22, 5, 6, 7]));

// ? ---------- Other way ----------

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitude = function (temp1, temp2) {

//  ANCHOR Use concat

//   const temp = temp1.concat(temp2);
//   console.log(temp);

//   let min = 0;
//   let max = 0;
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;

//     if (min > temp[i]) {
//       min = temp[i];
//     }
//     if (max < temp[i]) {
//       max = temp[i];
//     }
//   }

//   const tempAmplitude = max - min;

//   return `The maximum Temperature is ${max} and the minimum Temperature is ${min}. The temperature amplitude is ${tempAmplitude}.`;
// };

// console.log(calcTempAmplitude(temperatures, [67, 87, -22, 5, 6, 7]));

// ! Debugging with the Console and Breakpoints

// const measureKelvin = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',

//     value: 10,
//   };

//   console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   console.log(measurement);
//   console.table(measurement);

//   const kelvin = measurement.value + 273;

//   return kelvin;
// };

// * A) Identify
// console.log(measureKelvin());

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmplitudeBug = function (temp1, temp2) {
//   //  ANCHOR Use concat

//   const temp = temp1.concat(temp2);
//   console.log(temp);

//   let min = temp[0];
//   let max = temp[0];
//   for (let i = 0; i < temp.length; i++) {
//     if (typeof temp[i] !== 'number') continue;

//     // debugger;
//     if (min > temp[i]) {
//       min = temp[i];
//     }
//     if (max < temp[i]) {
//       max = temp[i];
//     }
//   }

//   const tempAmplitudeBug = max - min;

//   return `The maximum Temperature is ${max} and the minimum Temperature is ${min}. The temperature amplitude is ${tempAmplitudeBug}.`;
// };

// console.log(calcTempAmplitudeBug([3, 5, 1], [4, 5, 6]));

// ! Coding Challenge #1

// ? Understanding the problem

// FIXME What is forecasted maximum temperatures?
// Answer: a statement of what the weather is likely to be for the next day or few days

// FIXME how to print like this : "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...

// ? Breaking The Problems

// FIXME: Create a function which can take array

// FIXME: Print the string using loops

// * will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
const printForecast = function (arr) {
  let forecastStr = '... ';

  for (let i = 0; i < arr.length; i++) {
    forecastStr += `${arr[i]}ºC in ${i + 1} days ... `;
  }

  console.log(forecastStr);
};

printForecast([17, 21, 23]);

printForecast([12, 5, -5, 0, 4]);
