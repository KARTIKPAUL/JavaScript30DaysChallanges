//day 07 => Objects

//Activity 01

//task 01
const book = {
    title: 'Koni',
    authoor: 'Khidda',
    year: 2004,
}

console.log(`Descrption of the book is  Title : ${book.title} , Author : ${book.authoor} , Year : ${book.year}`);

//task 2
//Access the title and author properties
console.log(`Title is : ${book.title}`);
console.log(`Author is : ${book.authoor}`);


//Activity 02
//task 3
//Object Methods
book.titleAndAuthor = () => {
    console.log(`Author is : ${book.authoor} And Title is : ${book.title}`);
}

//Call The Method
book.titleAndAuthor();


//task 4
book.yearChange = (year) => {
    year = new Date().getFullYear();
    console.log(year);
}
book.yearChange(book.year);

console.log('Updated Book is: ',book);


//Activity 3
//task 5
//Nested Object
const library = {
    name: 'Central Library',
    books: [
        {
        title: 'Maku',
        writer: 'Lila Majumdar',
    },{
        title: 'HOZBOROL',
        writer: 'Sukumar Roy'
    }
    ]
}

console.log('Library Object is : ' , library);


//task 6
//Access the Library Name and books name of all the library
console.log(`Library Name is: ${library.name}`);
library.books.map((ele) => {
    console.log(`The Title of the books is : ${ele.title}`);
})


//Activity 4
//task 7

book.helper = function (){
    console.log(`Details of the book is  Title : ${this.title} , Author : ${this.authoor} , Year : ${this.year}`);
}
book.helper();


//Activity 5
//Object Iteration
//task 8
for(let key in book) {
    console.log(`${key} : ${book[key]}`);
}

//task 9
//Print Object.keys()
console.log(Object.keys(book));
//Print Object.values()
console.log(Object.values(book));













