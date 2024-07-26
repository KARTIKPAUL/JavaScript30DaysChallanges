const _ = require('lodash');

const arr = [1,2,3,4,5];
console.log(`Original Array is : ${arr}`);

//Using _.map double the values
const doublevalue = _.map(arr, num => num * 2);
console.log(`Doubled Array is : ${doublevalue}`);

//Using _.filter to get even numbers
const evenNumbers = _.filter(arr , num => num % 2 === 0)
console.log(`Even Numbers of Array's is : ${evenNumbers}`);
