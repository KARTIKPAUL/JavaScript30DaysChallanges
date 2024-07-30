function longestStbstring(str){
    let set = new Set();
    let maxLength = 0;
    let st = 0;
    let n = str.length;

    for(let i = 0 ; i < n ; i++){
        while(set.has(str[i])){
            set.delete(str[st]);
            st++;
        }

        set.add(str[i]);
        maxLength = Math.max(maxLength,i-st+1);
    }

    return maxLength;
}

let str = "asdfffghmki"
console.log(`Length of the longest substring without repeating characters: ${longestStbstring(str)}`);