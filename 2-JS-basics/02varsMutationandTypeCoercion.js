/*
Variables mutation and type Coercion
*/

// Type Coercion
var firstName = 'John';
var age = 28; 

console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married' + isMarried);

// Variable Mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
