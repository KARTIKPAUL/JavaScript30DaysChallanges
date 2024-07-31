let text = 'AmiarTumi$78';
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/;

let isValidPassword = text.match(regex);

if(isValidPassword){
    console.log(`Password is Valid: ${isValidPassword}`);
}else{
    console.log(`Password is InValid`);
}