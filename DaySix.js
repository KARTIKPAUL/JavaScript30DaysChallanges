//Day 6

//Activity 1 => Array Creation And Access
//task 1

let arr1 = [1,2,3,4,5];
console.log('Array is ', arr1);

//task 2
console.log(`First Element of the array is: ${arr1[0]}`);
console.log(`Last Element of the array is: ${arr1[arr1.length-1]}`);


//Activity 2
//task 3
//Push Method
arr1.push(6);
console.log(`Updated Array is: ${arr1}`);

//task 4
//Pop Method
arr1.pop();
console.log(`Updated Array is: ${arr1}`);

//task 5
//Shift Method
arr1.shift();
console.log(`Updated Array is: ${arr1}`);

//task 6
//Unshift Method
arr1.unshift(0);
console.log(`Updated Array is: ${arr1}`);


//Activity 3
//task 7
//Map Method
let arr2 = [];
arr1.map((el) => {
    arr2.push(el*2);
})

console.log(`After using Map Method New Array is : ${arr2}`);

//task 8
//Filter Method
let evenNumbers = arr1.filter(el => el % 2 === 0)
console.log(`After using Filter method New Array is: ${evenNumbers}`);

//task 9
//Reduce Method
let sum = arr1.reduce((acc,curr) => acc + curr , 0);
console.log(`Sum of the elements is: ${sum}`);


//Activity 4
//task 10
//Using For Loop print all the elements
let n = arr1.length;
for(let i = 0 ; i < n ; i++){
    console.log(`Element's is: ${arr1[i]}`);
}

//Using For-Each Loop print all the elements
//task 11

arr1.forEach((el) => console.log(`Element's is: ${el}`));


//Activity 5
//task 12
//Print a 2D Array
let twoDimensionalArray = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15]
]
console.log(`Two Dimensional Array is: ${twoDimensionalArray}`);

//task 13
//Access A Particular Element in 2D Array

console.log(`An Element of 2D array is: ${twoDimensionalArray[0][0]}`);





