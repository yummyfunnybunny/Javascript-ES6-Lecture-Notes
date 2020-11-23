//========================================================================
// STRINGS IN ES6: TEMPLATE LITERALS
//========================================================================

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    const date = new Date();
        return date.getFullYear() - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 : temperet literals
// use `` instead of '' on the entire string
// wrap any variables with ${} inside the ``
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);

// new string functions in ES6 below
const n = `${firstName} ${lastName}`;

// 'startsWith' method (this method is case-sensitive)
// true/false statement
console.log(n.startsWith('J'));

// 'endsWith' method (this method is case-sensitive)
// true/false statement
console.log(n.endsWith('th'));

// 'endsWith' method (this method is case-sensitive)
// true/false statement
console.log(n.includes(' '));

// 'repeat' method
console.log(firstName.repeat(5));

// or (using template literals):
console.log(`${firstName} `.repeat(5));
