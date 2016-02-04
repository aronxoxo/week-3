/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data.
Underscore's _.each function provides us with an easy to read, simple way to
accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation:
http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

/* =====================
The first one is as below:
Instructions: Write a function that takes a list of numbers and returns a list with only numbers above 10
===================== */
var array = [4, 11, 12, 13];
var newArray=[];

_.each(array, function(val){
  if(val>10){
    newArray.push(val);
  }
})

console.log('The list of numbers above ten is:');
console.log(newArray);


/* =====================
The second one is as below:
Instructions: "Write a function which counts the number of times a value occurs in an array "
Example: "countItem(['a', 'b', 'a'], 'a') should return 2"
===================== */

var array = [1, 2, 3, 4, 5, 4, 4];
var count = 0;

_.each(array, function(value){
  if(value === 4){
    count++;
  }
})

console.log('The number of times when 4 occurs in the list is: ');
console.log(count);
