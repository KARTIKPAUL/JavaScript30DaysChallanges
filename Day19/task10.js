let text = 'https://google.com';
let regex =  /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/i;

let isValidUrl = text.match(regex);
if(isValidUrl){
    console.log(`Url is valid: ${isValidUrl}`);
}else{
    console.log(`Url is Not Valid`);
}