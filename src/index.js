import React from "react";
import emojipedia from "./emojipedia";

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// const double = numbers.map(function (input){
//   return (input * 2);
// })

// console.log(double);

//Filter - Create a new array by keeping the items that return true.

// const even = numbers.filter(function(input){
//   return(input % 2 != 1);
// })
// console.log(even);

//Reduce - Accumulate a value by doing something to each item in an array.

const totalSum = numbers.reduce(function (Accumulator, currentNumber) {
  return Accumulator + currentNumber;
});

console.log(totalSum);

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.

// function short(prop){
//   var text = prop.meaning;
//   var shortText = text.substring(1, 100);
//   return(shortText);
// }

// console.log(emojipedia.map(short));
