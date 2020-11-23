//========================================================================
// DESCTRUCTURING
//========================================================================
// destructuring is a useful tool for extracting properties from objects and
// binding them to variables

// we can extract multiple properties in one statement
// we can access properties from nested objects
// we can set a default value of the property we want doesnt exist

// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6 - Desctructuring arrays
const [name, age] = ['John', 26];
console.log(name, age); // John 26

// ES6 - destructuring objects
const obj = {
        firstName: 'John',
        lastName: 'Smith'
};
// the new constants created below have to be named exactly the same as the object elements they are copying
const {firstName, lastName} = obj;
console.log(firstName); // John
console.log(lastName);  // Smith

// ALIASES
// if you do not want your new constants to match exactly with the object elements they are being assigned to,
// you can change them like so:
const {firstName: a, lastName: b} = obj;
console.log(a); // John
console.log(b); // Smith

// you can also destructure an array that is returned through a function like below:
function calcAgeRetirement(year) {
        const age = new Date().getFullYear() - year;
        return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);          // 30
console.log(retirement);    // 35

// DEFAULT VALUES
const hero = {
    name: "Batman",
    realName: "Bruce Wayne",
}

// set the default value like below if the object being copied from does not have an "enemies" property
const {enemies = "Joker"} = hero;

// you can also set the default value in an array:
const {enemy = ['Twoface']} = hero;

// EXTRACT FROM NESTED OBJECTS
const hero = {
    name: "Batman",
    realName: "Bruce Wayne",
    address: {
        city: 'Gotham'
    }
}

const {address:{city}} = hero;
console.log(city);   // Gotham

// EXTRACTING A DYNAMIC NAME PROPERTY
const prop = 'name';
const {[prop]: name} = hero;
console.log(prop);  // Batman

// HOW TO DESTRUCTURE TO AN EXISTING VARIABLE
let name;

const hero = {
  name: 'Batman'
};

({ name } = hero);
console.log(name); // 'Batman'


