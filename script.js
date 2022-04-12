"use strict";

//Divisble by 3 => Fizz
//Divisble by 5 => Buzz
//Divisble by both 3 and 5 => FizzBuzz
//Not divisble by 3 or 5 => input
//Not a number => 'Not a number'

/* Fizz Buzz  */
// const output = fizzBuzz(false);

// console.log(output);

// function fizzBuzz(input) {
//   if (typeof input != "number") {
//     return NaN;
//   }
//   if (input % 3 == 0 && input % 5 == 0) {
//     return "FizzBuzz";
//   }
//   if (input % 3 == 0) {
//     return "Fizz";
//   }
//   if (input % 5 == 0) {
//     return "Buzz";
//   }
//   return input;
// }

/* Speed */

//Speed Limit = 70
//5 -> 1 point
//Math.floor(1.3)
//12 point -> suspended

// console.log(checkSpeed(10));

// var points = 0;
// function checkSpeed(speed) {
//   const newSpeed = Math.floor(speed);

//   if (newSpeed >= 75) {
//     while (points < 12) {
//       points += 1;
//       newSpeed += 5;
//     }
//     return points;
//   }

//   points = 0;
//   return "Suspended";
// }
//----------------------
// Min - Max
// function arrySum(arr) {
//   return arr.reduce((a, b) => a + b);
// }

// function miniMaxSum(arr) {
//   // Write your code here
//   arr.sort((a, b) => a - b);
//   let minArr = [...arr];
//   minArr.splice(0, 1);
//   let minNumb = arrySum(minArr);
//   console.log(minNumb);
//   //Max Arr
//   let maxArr = [...arr];
//   maxArr.splice(-1, 1);
//   console.log(maxArr);
//   let maxNumb = arrySum(maxArr);
//   console.log(`${maxNumb} ${minNumb}`);
// }

// console.log(miniMaxSum([1, 2, 3, 4, 5]));
// console.log(arrySum([1, 2, 3]));
//------------------------------
// Time Format
// function timeConversion(s) {
//   let timeArr = s.substring(0, 8).split(":");
//   if (s.includes("PM")) {
//     timeArr[0] = +timeArr[0] + 12;
//     timeArr[0] == 24 ? (timeArr[0] = "12") : timeArr[0];
//     return `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
//   } else {
//     timeArr[0] == 12 ? (timeArr[0] = "00") : timeArr[0];
//     return `${timeArr[0]}:${timeArr[1]}:${timeArr[2]}`;
//   }
// }
// console.log(timeConversion("12:45:54PM"));
//----------------------------
// Grading Problem
// function gradingStudents(grades) {
//   for (let i = 0; i < grades.length; i++) {
//     let diff = grades[i] % 5;
//     if (grades[i] >= 40 && (diff == 3 || grades[i] % 5 == 4)) {
//       grades[i] = grades[i] + (5 - (grades[i] % 5));
//     }
//   }
//   return grades;
// }

// console.log(gradingStudents([74, 52, 30]));

// const arr1 = [2, 3, 4, 5, 6];

// const arr2 = [...arr1];

// arr2.push(7);
// console.log(arr1);

//-----------------
// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [, , ...arr] = list; // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
//----------------------------
// Only change code below this line
// class Thermostat {
//   constructor(fahrenheit) {
//     this._fahrenheit = fahrenheit;
//   }
//   //getter
//   get temperature() {
//     let c = (5 / 9) * (this._fahrenheit - 32);
//     return c;
//   }
//   set temperature(updatedTemp) {
//     this._temp = updatedTemp;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius

// console.log(temp);
//-------------------------------
//Reverse a String
// function reverseString(str) {
//   let arr = str.split("").reverse();
//   return arr.join("");
// }

// reverseString("hello");
//----------------------------
// function factorialize(num) {
//   let temp = 1;
//   for (let i = num; i >= 1; i--) {
//     temp *= i;
//   }
//   return temp;
// }

// console.log(factorialize(5));
//------------------------------
//Largest Word Length
// function findLongestWordLength(str) {
//   let lengthArr = [];
//   let sentenceArr = str.split(" ");
//   sentenceArr.forEach((element) => {
//     lengthArr.push(element.length);
//   });

//   return Math.max(...lengthArr);
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
//------------------------------
// function largestOfFour(arr) {
//   let maxArr = [];
//   arr.forEach((item) => {
//     maxArr.push(Math.max(...item));
//   });
//   return maxArr;
// }

// console.log(
//   largestOfFour([
//     [4, 5, 1, 3],
//     [13, 27, 18, 26],
//     [32, 35, 37, 39],
//     [1000, 1001, 857, 1],
//   ])
// );
//----------------------------
// Confirm Ending
// function confirmEnding(str, target) {
//   console.log(`String Length ${str.length}`, ` | Target Length : ${target.length}`);

//   let result = str.substring(str.length, str.length - target.length);
//   if (result == target) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(confirmEnding("Bastian", "n"));
//----------------------------
//Truncate a String
// function truncateString(str, num) {
//   let trancatedString = str.slice(0, num);
//   if (str.length == num || num > str.length) {
//     return str;
//   } else {
//     return trancatedString.concat("...");
//   }
// }

// console.log(
//   truncateString(
//     "A-tisket a-tasket A green and yellow basket",
//     "A-tisket a-tasket A green and yellow basket".length + 2
//   )
// );
//-----------------------------
// Finders Keepers

// function findElement(arr, func) {
//   let num = 0;
//   arr.forEach((i, element) => {
//     num = i;
//     console.log(num);
//     if (func(element)) {
//       return num;
//     }
//   });
//   return undefined;
// }

// console.log(
//   findElement([1, 3, 5, 8, 9, 10], function (num) {
//     return num % 2 === 0;
//   })
// );
//-------
// Better way
// function findElement(arr, func) {
//   return arr.find(func);
// }

// findElement([1, 2, 3, 4], num => num % 2 === 0);
//-------------------------------
// Boo who
// function booWho(bool) {
//   return typeof bool == "boolean" ? true : false;
// }

// console.log(booWho(false));
//--------------------------------
// Title Case a Sentence
// function titleCase(str) {
//   const newTitle = str.split(" ");
//   const updatedTitle = [];
//   for (let st in newTitle) {
//     updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
//   }
//   return updatedTitle.join(" ");
// }

// console.log(titleCase("I'm a little tea pot"));
//---------------------------------
//Falsy Bouncer
// function bouncer(arr) {
//   const trueValues = arr.filter((item) => {
//     if (item) {
//       return item;
//     }
//   });
//   return trueValues;
// }

// console.log(bouncer([7, "ate", "", false, 9]));
//---------------------------------
// Where do I belong
// function getIndexToIns(arr, num) {
//   arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       return i;
//     }
//   }
//   return arr.length;
// }

// getIndexToIns([40, 60], 50);
// console.log(getIndexToIns([], 19));
//---------------------------------
// Mutations
// function mutation(arr) {
//  let testArray = arr[0].toUpperCase();
//  let targetArray = arr[1].toUpperCase();
// for(let i = 0; i < arr.length; i++){
//   if (targetArray.indexOf(testArray[i]) < 0) return false
// }
//  return true
// }
// console.log(mutation(["hello", "hey"]);
//---------------------------------------------
// Chunky Monkey
// function chunkArrayInGroups(arr, size) {
//   let newArr = [];
//   // let newMonkey = arr.slice(size);
//   for (let i = 0; i < arr.length; i += size) {
//     newArr.push(arr.slice(i, i + size));
//   }

//   return newArr;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//------------------------------------------
// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myMap = function (callback) {
//   const newArray = [];
//   // Only change code below this line
//   for (let i = 0; i < callback.length; i++) {
//     newArray.push(callback([this[i]]));
//   }
//   // Only change code above this line
//   return newArray;
// };

// const new_s = s.myMap(function (item) {
//   return item * 2;
// });

// console.log(new_s);

// const squareList = (arr) => {
// Only change code below this line
//   let newArr = arr
//     .filter((number) => {
//       if (Number.isInteger(number) && number > 0) {
//         return number;
//       }
//     })
//     .map((number) => number * number);
//   return newArr;
// Only change code above this line
// };

// const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
// console.log(squaredIntegers);
//------------------------------------------
// function alphabeticalOrder(arr) {
// Only change code below this line
//   arr.sort();
//   return arr;
// Only change code above this line
// }

// console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
//---------------------------------------------
// Only change code below this line
// Only change code below this line
// function urlSlug(title) {
//   let titleArr = title.trim().split(/\s+/).join("-").toLowerCase();
//   return titleArr;
// }
// Only change code above this line

// console.log(urlSlug(" Winter Is  Coming"));
//---------------------------------------------
// function checkPositive(arr) {
//   return arr.every((current) => {
//     current > 0;
//   });
// }

// console.log(checkPositive([1, 2, 3, -4, 5]));
//----------------------------------------------
// function sumAll(arr) {
//   let newArr = [...arr];
//   let max = Math.max(...newArr);
//   let min = Math.min(...newArr);
//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(sumAll([1, 4]));
//---------------------------------------------
// function diffArray(arr1, arr2) {
//   const newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.indexOf(arr1[i]) == -1) {
//       newArr.push(arr1[i]);
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1 && !newArr.includes(arr2[i])) {
//       newArr.push(arr2[i]);
//     }
//   }
//   return newArr;
// }

// console.log(
//   diffArray(
//     ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
//     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//   )
// );
//-------------------------------------------------
// Search and Destroy
// function destroyer(arr, ...arg) {
//   let newArr = arr;
//   for (let i = 0; i < newArr.length; i++) {
//     if (arg.includes(newArr[i])) {
//       let index = newArr.indexOf(newArr[i]);

//       console.log(index);
//     }
//   }
//   return arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//-------------------------------------
// function containsCommonItem(array1, array2) {
//   let map = {};

//   for (let i = 0; i < array1.length; i++) {
//     if (!map[array1[i]]) {
//       const item = array1[i];
//       map[item] = true;
//     }
//   }

//   for (let j = 0; j < array2.length; j++) {
//     if (map[array2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsCommonItem(["a", "b", "d", "k"], ["y", "t", "o", "a"]));

// let arr1 = [1, 2, 3, 4];
// let arr2 = []

// let obj = Object.assign({}, arr1);

// console.log(obj[0]);
//------------------------------
// Naive Apporach

// function hasPairWithSum(arr, sum) {
//   let len = arr.length;

//   for (let i = 0; i < len - 1; i++) {
//     for (let j = i + 1; j < len; j++) {
//       if (arr[i] + arr[j] == sum) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(hasPairWithSum([1, 3, 7, 5, 4], 10));
