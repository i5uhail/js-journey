//  truthy and falsy values and equality operators

// falsy values: undefined , null, 0, '', NaN
// truthy values: NOT Falsy value

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has not been defined');
}

// Equality Operators

if (height === '23') {
    console.log('The == Operator does type coercion!')
}