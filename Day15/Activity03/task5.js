const arr = [];
for(let i = 0 ; i < 5 ; i++){
    arr[i] = function(){
        console.log(i);
    }
}

arr[0]();
arr[1]();
arr[2]();
arr[3]();
arr[4]();



