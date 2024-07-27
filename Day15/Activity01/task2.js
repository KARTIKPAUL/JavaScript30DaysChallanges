function createPrivateCounter(){
    let count = 0;

    return {
        increment: function(){
            count += 1; 
        },
    
        getValue: function(){
            return count;
        }
     }
}

let myCount1 = createPrivateCounter();
myCount1.increment();
console.log(myCount1.getValue());
myCount1.increment();
console.log(myCount1.getValue());


let myCount2 = createPrivateCounter();
myCount2.increment();
console.log(myCount2.getValue());
myCount2.increment();
console.log(myCount2.getValue());
myCount2.increment();
console.log(myCount2.getValue());
myCount2.increment();
console.log(myCount2.getValue());

