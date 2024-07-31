let text = "(123) 456-7890";
let regex = /\((\d{3})\)\s(\d{3})-(\d{4})/
console.log(text.match(regex));