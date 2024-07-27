function getUserName(userName){
    return function(){
        return `Hello My Name is : ${userName}`
    }
}

let person1 = getUserName('kartik Paul');
console.log(person1());
