//Day 4 => Loops

//Activity 1

//task 1
for(let i = 1 ; i <= 10 ; i++){
    console.log(i);
}

//task 2
for(let i = 1 ; i <= 10 ; i++){
    console.log(`5 * ${i} is : ${5 * i}`);
}

//Activity 2

//tsak 3

let sum = 0;
let i = 1;
while(i <= 10){
    sum += i;
    i++
}
console.log(`sum of 1 to 10 is ${sum}`);

//task 4

let val = 10;
while(val > 0){
    console.log(val);
    val--;
}

//Activity 5

//tsak 5

let value = 1;

do {
    console.log(value);
    value++;
} while (value < 6);

//task 6

let fact = 1;
let num = 5;
do {
    fact *= num;
    num--; 
} while (num > 0);
console.log(`Factorial is: ${fact}`);

//Activity 4

//task 7
//Star Pattern

for(let i = 0 ; i < 5 ; i++){
    let star = ''
    for(let j = 0 ; j < i + 1 ; j++){
        star = '* ' + star;
    }
    console.log(star);
    star = '';
}


//Activity 5

//task 8

for(let i = 1 ; i <= 10 ; i++){
    if(i == 5) continue;
    console.log(i);
}

//task 9

for(let i = 1 ; i <= 10 ; i++){
    if(i == 7) break;
    console.log(i);
}
