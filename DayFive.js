//Day 5 => Functions

//Activity 1

//Taks 1
function oddOrEven(n){
    if(n % 2 == 0) return `${n} is a Even Number`;
    else return `${n} is a Even Number`;
}

console.log(oddOrEven(10));

//Task 2
function squreCalculate(n){
    return n * n;
}
let val = 10;
console.log(`Squre of ${val} is ${squreCalculate(val)}`);


//Activity 2

//task 3

function maximumNumber(num1,num2){
    if(num1 > num2){
        return num1;
    }
    return num2;
}

let num1 = 10;
let num2 = 20;

console.log(`${maximumNumber(num1,num2)} is the Highest of this two numbers`);


//task 4
//Concatenate Two String

function concatenateString(s1,s2){
    let ans = s1.concat(s2);
    return ans;
}

console.log(`Concatenate String is ${concatenateString('kartik',' paul')}`);


//Activity 3

//task 5
const sum = (num1,num2) => {
    return num1 + num2;
}

console.log(`Sum of Two Numbers is ${sum(10,20)}`);


//task 6

const ifPresent = (str,ch) => {
    if(str.includes(ch)) return true;
    return false;
}
console.log(ifPresent('kartik','k'));


//Activity 4

//task 7

function productNumbers(num1,num2 = 15){
    return num1 * num2;
}

console.log(`Product Of Two Numbers is ${productNumbers(10)}`);

//task 8

function ageCalculate(name,age=20){
    console.log(`Persons Name is ${name} and age is ${age}`);
}
ageCalculate('kartik');



//Activity 5

//task 9

function smallFunction(){
    console.log(`Hello EveryOne`);
}

function largeFunction(smallFunction,num){
    for(let i = 0 ; i < num ; i++){
        smallFunction();
    }
}

largeFunction(smallFunction,5);


//task 10

function mainFunction(fn1,fn2,value){
    let val = fn1(value);
    return fn2(val);
}

function fn1(n){
    return n+n;
}
function fn2(n){
    return n*2;
}

console.log(mainFunction(fn1,fn2,5));






