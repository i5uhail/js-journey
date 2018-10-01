// IF Else Statement 

var firstName  = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married ');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var marksMass, marksHeight, johnsMass, johnsHeight;

marksMass = 160;
johnsMass = 2000;
marksHeight = 3.67;
johnsHeight = 5.13;

marksBmi = marksMass / (marksHeight * marksHeight);
johnsBmi = johnsMass / (johnsHeight * johnsHeight);

console.log(marksBmi, johnsBmi);

var b_value = marksBmi > johnsBmi;

if (marksBmi > johnsBmi) {
    console.log('Marks BMI is higher than Johns');
} else {
    console.log('Johns BMI is higher than Marks')
}