let str = "kartikkka";
let map = new Map();
let n = str.length;
for (const ch of str) {
    if(map.has(ch)){
        map.set(ch,map.get(ch) + 1)
    }else{
        map.set(ch,1);
    }
}

for(let [ch , count] of map){
    console.log(`Count of ${ch} is: ${count}`);
}
