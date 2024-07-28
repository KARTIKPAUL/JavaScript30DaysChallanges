function isPalindrome(str){
    if(str === "") return true;
    if(str.length <= 1) return true;

    if(str.charAt(0) !== str.charAt(str.length-1)) return false;

    return isPalindrome(str.substr(1,str.length-2));
}


let s1 = 'asdffdsa';
if(isPalindrome(s1)){
    console.log(`${s1} is Palindrome`);
}
else{
    console.log(`${s1} is Not Palindrome`);
}


let s2 = 'asdf';
if(isPalindrome(s2)){
    console.log(`${s2} is Palindrome`);
}
else{
    console.log(`${s2} is Not Palindrome`);
}