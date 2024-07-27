function uniqueIdGenerate(){
    let uniqueid = 0;

    return function(){
        return uniqueid++;
    }
}

const id1 = uniqueIdGenerate();
console.log(id1());
console.log(id1());
console.log(id1());
