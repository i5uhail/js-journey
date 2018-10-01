var firstName = 'John';
var age = 16;

// ternary Operator
age >= 18 ? console.log(firstName + ' Drinks Beer.') : console.log(firstName + ' Drinks Juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch Statement (Cleaner version of if else statement)
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
    console.log(firstName + ' Teaches kids how to code.');
    break;
    case 'driver':
    console.log(firstName + ' Drives an uber.');
    break;
    case 'designer':
    console.log(firstName + ' Designs website');
    break;
    default:
    console.log(firstName + ' does something else.');
}

var firstName = 'John';
var age = 20;

switch (true) {
    case age <13:
    console.log(firstName + ' is a boy.');
    break;
    case age >= 13 && age < 20:
    console.log(firstName + ' is a teenager.');
    break;
    case age >= 20 && age < 30:
    console.log(firstName + ' is a young man.');
    break;
    default:
    console.log(firstName + ' is a Man.');
}

