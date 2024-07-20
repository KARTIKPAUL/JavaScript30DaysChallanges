//Dat 08
//ES6+ Features

//Activity 01
//Template Literals

//task 1
let personName = `Kartik`;
let personAge = 20;
console.log(`Name is: ${personName} and age is: ${personAge}`);

//task 2
let personDetails = `Hello EveryOne My Name is Kartik Paul,Currently I'm a final year CSE student of Techno International Batanagar`
console.log(`${personDetails}`);


//Activity 02
//Destructuring

//task 3
let arr1 = [1,2,3,4,5];
let[firstElement,secondElement] = arr1;
console.log(`First Element is: ${firstElement}`);
console.log(`Second Element is: ${secondElement}`);

//task 4

const book = {
    title: 'Dj Book',
    author: 'Kartik Paul',
    publishedYear: 2024 
}

const {title , author} = book;
console.log(`Title of the book is: ${title}`);
console.log(`Author of the book is: ${author}`);



//Activity 03
//Spread and Rest Operators

//task 5
let a1 = [1,2,3];
let a2 = [4,5,6];
let combineArray = [...a1,...a2,7,8,9];
console.log('New Combine Array is: ',combineArray);

//task 6
function sum(...numbers){
    return numbers.reduce((total,el) => total + el , 0);
}
console.log(`Sum of This Element is: ${sum(1,2,3,4,5)}`);



//Activity 04
//Default Parameters

//task 7
function product(num1,num2 = 1){
    return num1 * num2;
}

console.log(`Value of the Product is With Parameter ${product(2,5)}`);
console.log(`Value of the Product is Without Parameter ${product(2)}`);


//Activity 05
//Enhance Object Literals

//task 8

let user = {
    name: 'Kartik Paul',
    age: 20,
    role: 'SDE Intern',

    hobby: function(){
        console.log(`My Hobby is to Singing Song,Playing Football,Travel`);
    },
}

console.log('User Details is: ',user);
console.log(`User Name is: ${user.name}`);
console.log(`User Age is: ${user.age}`);
console.log(`User Role is: ${user.role}`);
user.hobby();


//task 9

let prop1 = 'name';
let prop2 = 'position';
let prop3 = 'capital'

let state = {
    [prop1]: 'West Bengal',
    [prop2]: 'Esat',
    [prop3]: 'Kolkata',
}

console.log(state);













