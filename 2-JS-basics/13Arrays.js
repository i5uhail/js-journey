// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);
console.log(names[0]);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Martha';
names[4] = 'Mary';

console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

// Array methods. 
john.push('blue') // pushes to last
john.unshift('Mr') // pushes to first 
console.log(john)

john.pop('') // pops the last element in the array
console.log(john)
john.pop('')
john.shift('') // Deletes the first element from the array
console.log(john)

console.log(john.indexOf(1990)); // returns the index number of 1990 in the array

console.log(john.indexOf(10)); // should return -1 since its not in the array

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';

console.log(isDesigner);
