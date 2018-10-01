/* Challenge 1 */
var marksMass, marksHeight, johnsMass, johnsHeight;

marksMass = 60;
johnsMass = 70;
marksHeight = 3.67;
johnsHeight = 5.13;

marksBmi = marksMass / (marksHeight * marksHeight);
johnsBmi = johnsMass / (johnsHeight * johnsHeight);

console.log(marksBmi, johnsBmi);

var b_value = marksBmi > johnsBmi;

console.log('Is Mark\'s BMI higher than John\'s ? ' + b_value);