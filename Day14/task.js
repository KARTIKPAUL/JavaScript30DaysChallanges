//Day 14 => Classes


//Activity 01
//Class Defination
class Person{
   constructor(name,age){
    this.name = name;
    this.age = age;
   }
   greeting(){
    return `Hello ${this.name} currently you are ${this.age} years old !`
   }
   updateAge(newAge){
      this.age = newAge;
   }
   genericGreeting(){
      return 'Hello This is Generic Greeting Message';
   }
}

const person1 = new Person('kartik',20)
console.log(person1.name);
console.log(person1.age);
person1.updateAge(22);
console.log(person1.age);
console.log(person1.greeting());


//Activity 02
//Class Inheritance

class Student extends Person {
   constructor(name,age,studentId){
      super(name,age);
      this.studentId = studentId;
      Student.incrementStudent();
   }
   deatils(){
      return `Student Id is : ${this.studentId}`;
   }
   greeting(){
      return `Hello ${this.name} currently you are ${this.age} years old ! and your studentId is : ${this.studentId}`
   }
   static incrementStudent(){
      if(!this.studentCount){
         this.studentCount = 0;
      }
      this.studentCount++;
   }
   static getStudentCount(){
      return `Total Student is : ${this.studentCount}`
   }
}

const student1 = new Student('Dj',21,1);
const student2 = new Student('Boss',23,2);
console.log(student1.deatils());
console.log(student1.greeting());


//Activity 03
//Static Mathods and Properties

//task 05
console.log(person1.genericGreeting());
//task 06
console.log(Student.getStudentCount());


//Activity 04
//Getters & Setters

class Person2 {
   constructor(firstName,lastname){
      this.firstName = firstName;
      this.lastname = lastname
   }
   get fullName(){
      return `Your Name is: ${this.firstName} ${this.lastname}`
   }

   set fullName(name){
      const[firstName,lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastname = lastName;
   }
}

const person2 = new Person2('Kartik','Paul');
const person3 = new Person2('Ami','Paul');
console.log(person2.fullName);
console.log(person3.fullName);
person2.fullName = 'Kartik Owner';
console.log(person2.fullName);


//Activity 05
//Private Fields

class Account{
   #balance

   constructor(balance){
      this.#balance = balance;
   }

   get balance(){
      return `Your Balance is : ${this.#balance}`
   }

   deposit(amount){
      this.#balance += amount;
      return `${amount} Deposit Succesfull !! & Your Current Bank Balance is : ${this.#balance}`
   }

   withdraw(amount){
      if(this.#balance < amount){
         return 'You Have Not Enough Money For Withdraw!!'
      }else{
         this.#balance -= amount;
         return `${amount} Withdraw Successfull ! Now Balance is : ${this.#balance}`
      }
   }
}

const accout1 = new Account(20000);
console.log(accout1.balance);
console.log(accout1.deposit(1000));
console.log(accout1.withdraw(22000));
console.log(accout1.withdraw(2000));








