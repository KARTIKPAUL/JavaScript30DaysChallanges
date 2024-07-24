//Day 12 => Error Handling

//Activity 12

//task 01
function task1(){
    throw new Error(`SomeThing Error Happen !`)    
}

try {
    task1()
} catch (error) {
    console.log('SomeThing Went Wrong in task 1 !'); 
}


//task 02
function task2(num1,num2){
    if(num2 == 0) throw new Error('Divisible by 0 is not allowed');
    let ans =  num1 / num2;
    console.log(ans);
}

try {
    task2(2,0);
} catch (error) {
    console.log('Error in Task 2',error.message);
}



//Activity 02
//task 03

function task3(num1,num2){
    if(num2 == 0) throw new Error('Divisible by 0 is not allowed');
    let ans =  num1 / num2;
    console.log(ans);
}

try {
    task3(2,0);
} catch (error) {
    console.log('Error in Task 3',error.message);
}
finally{
    console.log('Finally Block is always executed !');
}




//Activity 03
//task 04

class customError extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
        this.message = message;
    }
}

function task4(){
    throw new Error('Error in Taks 04');
}

try {
    task4();
} catch (error) {
    console.log('Error in Task 04 in error page , ',error.message);;
}

//task 05

class customInputs extends Error{
    constructor(message){
        super(message);
        this.name = this.constructor.name;
    }
}

function task5(str){
    if(typeof str !== 'string' || str.trim() === ''){
        throw new customInputs('Please Enter A Non Empty String !!')
    }
}

try {
    let userInput = 'Asdf'
    task5(userInput);
    console.log("Input is valid : " , userInput )
} catch (error) {
    console.log('Error is Task 05',error.message);
    
}



//Activity 04
//task 06
const promiseOne = new Promise((resolves,rejects) => {
    setTimeout(() => {
        let err = false;
        if(!err){
            resolves('Sucessfully !!');
        }else{
            rejects('failed !!');
        }
    },2000);
})

promiseOne.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error);
})



//task 07
async function task7(){
    try {
        const res = await promiseOne;
        console.log(res); 
    } catch (error) {
        console.log(error);
    }
}

task7();


//Activity 05
//task 08
fetch('https://api.githu.com/users/kartikpaul')
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log('Error in task 08',error.message);
})

//task 09

async function task9(){
   try {
        let res = await fetch('https://api.githu.com/users/kartikpaul');
        let data = await res.json();
        console.log(data);
   } catch (error) {
        console.log('Error in task 09',error.message);
   }
}
task9();

