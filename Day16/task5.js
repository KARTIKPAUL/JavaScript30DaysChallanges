function reverseString(str){
    if(str === "") return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

let s1 = "kartik";
console.log(`Reverse of ${s1} is : ${reverseString(s1)}`);

let s2 = "Paul";
console.log(`Reverse of ${s2} is : ${reverseString(s2)}`);