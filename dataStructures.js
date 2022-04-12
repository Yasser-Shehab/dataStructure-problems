//- Array Implementation

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   get(index) {
//     return this.data[index];
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }
//   pop() {
//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];
//     this.length--;
//     return lastItem;
//   }
//   delete(index) {
//     const item = this.data[index];
//     this.shiftItems(index);
//     return item;
//   }

//   shiftItems(index) {
//     for (let i = index; i < this.length - 1; i++) {
//       this.data[i] = this.data[i + 1];
//     }
//     delete this.data[this.length - 1];
//     this.length--;
//   }
// }

// const newArray = new MyArray();
// newArray.push("hi");
// newArray.push("asd");
// newArray.push("bobo");
// newArray.push("keko");
// newArray.delete(2);
// console.log(newArray);
//- Array Implementation
//---------------------------------------
// Reverse a String

// function reverseStr(string) {
//   let newString = string.split("");
//   let reversed = [];
//   let len = newString.length;
//   for (let i = len - 1; i >= 0; i--) {
//     reversed.push(newString[i]);
//   }
//   return reversed.join("");
// }

// console.log(reverseStr("I'm Hungry"));

// const mergeTwoArrays = (arr1, arr2) => [...arr1, ...arr2].sort();

// console.log(mergeTwoArrays([1, 8, 3], [4, 5, 6]));

// class HashTable {
//   constructor(size) {
//     this.data = new Array(size);
//   }

//   set(key, value) {
//     let address = this._hash(key);
//     if (!this.data[address]) {
//       this.data[address] = [];
//     }
//     this.data[address].push([key, value]);
//     return this.data;
//   }

//   get(key) {
//     let address = this._hash(key);
//     const currentBucket = this.data[address];
//     console.log(currentBucket);
//     if (currentBucket) {
//       for (let i = 0; i < currentBucket.length; i++) {
//         if (currentBucket[i][0] === key) {
//           return currentBucket[i][1];
//         }
//       }
//     }
//     return undefined;

//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * i) % this.data.length;
//     }
//     return hash;
//   }

//   key() {
//     const keysArray = [];
//     for (let i = 0; i < this.data.length; i++) {
//       if (this.data[i]) {
//         keysArray.push(this.data[i][0][0]);
//       }
//     }
//     return keysArray;
//   }
// }

// const myHashTable = new HashTable(50);
// myHashTable.set("grapes", 4000);
// myHashTable.set("Apples", 521);
// myHashTable.set("Beans", 312);
// console.log(myHashTable.get("Apples"));

// let array = new Array(50).fill("Cat");
// array[49] = "Dog";
// console.log(array);

// function findDog() {
//   for (let i of array) {
//     if (i === "Dog") {
//       console.log(i, "I Found dog");
//     }
//   }
// }

// Exercise

// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4]
// It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]
//It should return 1

//Given an array = [2,3,4,5];
//It should return undefined;

// function findRecurring(array) {
//   let newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (newArray.includes(array[i])) {
//       return array[i];
//     }
//     newArray.push(array[i]);
//   }
//   return undefined;
// }

// console.log(findRecurring([2, 5, 5, 2, 3, 5, 1, 6, 4]));
//------------------------------------------------------------

function fizzBuzz(number) {
  let outPut = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      outPut.push("FizzBuzz");
      continue;
    }
    if (i % 3 == 0) {
      outPut.push("Fizz");
      continue;
    }
    if (i % 5 == 0) {
      outPut.push("Buzz");
      continue;
    } else {
      outPut.push(`${i}`);
    }
  }
  return outPut;
}

console.log(fizzBuzz(3));
