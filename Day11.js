//Day 11 => Promises & Async/Await

//Activity 01 => UnderStanding Promises
//task 01
const promiseOne = new Promise((resolves,reject) => {
    setTimeout(() => {
        resolves(`I am Printing After 2 Seconds`);
    },2000)
});

promiseOne.then((message) => {
    console.log(`Promise One Resolves Successfully: ${message}`);
})
.catch((error) => {
    console.log(`Error Happen !! ${error}`);
})

//Task 02

const promiseTwo = new Promise((resolves,reject) => {
    setTimeout(() => {
        reject('Promise Two is Reject')
    },2000);
})

promiseTwo.then((message)=> {
    console.log(`Promise Two Resolves Successfully: ${message}`);
})
.catch((error) => {
    console.log(`Error Happen in Promise Two !! ${error}`);
})

//Activity 02 => Chaining Promises
//task 03

const promiseThree = new Promise((resolves,reject) => {
    setTimeout(function(){
        let err = false;
        if(!err){
            resolves({userName: 'kartik' , userId: '123'});
        }else{
            reject(`Error ! Something Went Wrong`)
        }
    },1000);
})

promiseThree.then((user) => {
    console.log(user);
    return user.userName;
})
.then((userName) => {
    console.log(userName);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log(`Finelly Promise Three Completed`);
})

//Activity 03 => Using Async/Await
//task 04

const promiseFour = new Promise((resolves,reject) => {
    setTimeout(() => {
        resolves('Promise Four is ReSolved');
    },3000)
})

async function resolvesPromseFour(){
    try {
        const responce = await promiseFour;
        console.log(responce);
    } catch (error) {
        console.log(error)
    }
}
resolvesPromseFour();

//task 05

const promiseFive = new Promise((resolves,reject) => {
    setTimeout(() => {
        resolves('Promise Five is Resolves !!')
    },4000)
})

async function resolvesPromseFive(){
    try {
        const res = await promiseFive;
        console.log(res);
        
    } catch (error) {
        console.log(error);
    }
}
resolvesPromseFive();

//Activity 04 => Fetching Data From API
//task 06

fetch('https://api.github.com/users/kartikpaul')
.then((responce) => {
    return responce.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(`Error Happen While Fetching data : ${error}`);
})

//task 07

async function getAllUsers () {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(`Error While Get Users : ${error}`);
    }
}
getAllUsers();


//Activity 05 => Concurrent Promise
//task 08

const promiseSix = new Promise((resolves,reject) => {
    setTimeout(() => {
        resolves('Promise 6 Resolved');
    },6000);
})

const promiseSeven = new Promise((resolves,reject) => {
    setTimeout(() => {
        resolves('Promise 7 Resolved');
    },6000);
})

const promiseEight = new Promise((resolves,reject) => {
    setTimeout(() => {
        resolves('Promise 8 Resolved');
    },6000);
})

Promise.all([promiseSix,promiseSeven,promiseEight])
.then((values) => {
    console.log(values);
})
.catch((error) => {
    console.log(`One Of Promise Got Rejected ${error}`);
    
})


//task 09
Promise.race([promiseSix,promiseSeven , promiseEight])
.then((first) => {
    console.log(first);
})
.catch((error) => {
    console.log(`One Of Promise Got Rejected While Racing ${error}`);
})


 
