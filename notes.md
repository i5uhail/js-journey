## Important links captured so far: 
- https://github.com/jonasschmedtmann/complete-javascript-course
- http://codingheroes.io/resources/ 


## Type Coercion: 

Type Coercion is the conversion of one type of object to a new object of a different type with similar content. Tapestry frequently must coerce objects from one type to another. A common example is the coercion of string "5" into an integer 5 or a double 5.0.

example

```js
var firstName = 'John';
var age = 28; 

console.log(firstName + ' ' + age);

\\ this prints: 
John 28
```

## Type of Operator

You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:

```js
typeof ""                  // Returns "string"
typeof "John"              // Returns "string"
typeof "John Doe"          // Returns "string"
```


## JavaScript Comparison Operators

```
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
```

# Functions in JavaScript

## Function Declaration :

Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

```js
function whatDoYouDo(job, firstName) {
    // blah here
}
```

## Function expression :

A JavaScript function can also be defined using an expression.

A function expression can be stored in a variable:

```js
var whatDoYouDo = function(job, firstname) {
    // blah here
}
```

After a function expression has been stored in a variable, the variable can be used as a function:

```js
var x = function (a, b) {return a * b};
```
As seen below
```js
var x = function (a, b) {return a * b};
var z = x(4, 3);
```
