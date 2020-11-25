//========================================================================
// LET & CONST
//========================================================================
/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/
// ES5
/*
function driversLicence5(passedTest) {
        if (passedTest) {
                console.log(firstName);
                var firstName = 'John';
                var yearOfBirth = 1990;   
        }
        console.log(firstName + ', Born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
        //console.log(firstName);
        let firstName; // 'let' can be declared outside of the function below but not assigned and still be used
        const yearOfBirth = 1990; // 'const' must be declared and assigned in order to be used in the function below
        if (passedTest) {
                firstName = 'John'; // first name can techinically be changed at some point (let)
                //yearOfBirth = 1990; // year of birth cannot ever be changed (const)
        }
        console.log(firstName + ', Born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driversLicence6(true);

//-------------

let i = 23;

for(let i = 0; i < 5; i++){
        console.log(i);
}
console.log(i);
*/
//========================================================================
// BLOCKS AND IIFEs
//========================================================================
/*
// ES6 provides the new below way to write code with data privacy, just like an IIFE from ES5
{
        const a = 1;
        let b = 2;
        var c = 3;
}
console.log(c);
console.log(a + b);
*/
//========================================================================
// STRINGS IN ES6: TEMPLATE LITERALS
//========================================================================
/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
        return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6 : temperet literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


const n = `${firstName} ${lastName}`;

// 'startsWith' method (this method is case-sensitive)
console.log(n.startsWith('J'));

// 'endsWith' method (this method is case-sensitive)
console.log(n.endsWith('th'));

// 'endsWith' method (this method is case-sensitive)
console.log(n.includes(' '));

// 'repeat' method
console.log(firstName.repeat(5));

// or (using template literals):
console.log(`${firstName} `.repeat(5));
*/
//========================================================================
// ARROW FUNCTIONS
//========================================================================
/*
const birthYears = [1990, 1965, 1982, 1937];

//ES5
var ages5 = birthYears.map(function(el) {
        return 2016 - el;
});
console.log(ages5);

//ES6

// Arrow function with 1 element
let ages6 = birthYears.map(el => 2016 - el);
console.log(ages6);

// Arrow function with 2 elements and also template literals added in
ages6 = birthYears.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// Arrow function with multiple lines of code
ages6 = birthYears.map((el, index) => {
        const now = new Date().getFullYear();
        const age = now - el;
        return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/
//========================================================================
// ARROW FUNCTIONS - CONTINUED
//========================================================================
/*
// EXAMPLE 1
//--------
// ES5
//--------
// in this ES5 example, we have to use a little hack to apply the 'this' method to the box5 object
// we create a variable called 'self', assign it to 'this', and than use 'self' as we normally would use 'this'
// in order to reference the box5 object
var box5 = {
        color: 'green',
        position: 1,
        clickMe: function() {
                var self = this;
                document.querySelector('.green').addEventListener('click', function() {
                        var str = 'This is box number ' + self.position + ', and it is ' + self.color;
                        alert(str);
                });
        }
}
//box5.clickMe();

// ES6 - 
//----------
// in this ES6 example, the arrow function allows us to use the 'this' method on the box6 object without using any tricks,
// because in ES6, the arrow function shares the lexical 'this' keyword of its surroundings
const box6 = {
        color: 'green',
        position: 1,
        clickMe: function() {
                document.querySelector('.green').addEventListener('click', () => {
                        var str = 'This is box number ' + this.position + ', and it is ' + this.color;
                        alert(str);
                });
        }
}
box6.clickMe();
*/

// EXAMPLE 1
//--------
/*
function Person(name) {
        this.name = name;
}
var friends = ['Bob', 'Jane', 'Mark'];

//ES5
Person.prototype.myFriends5 = function(friends) {
        var arr = friends.map(function(el) {
                return this.name + ' is friends with ' + el;
        }.bind(this));
        console.log(arr);
}
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
        var arr = friends.map(el => `${this.name} is friends with ${el}`);
        console.log(arr);
}
new Person('Mike').myFriends6(friends);
*/
//========================================================================
// DESCTRUCTURING
//========================================================================
/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6 - Desctructuring arrays
const [name, age] = ['John', 26];
console.log(name, age);

// ES6 - destructuring objects
const obj = {
        firstName: 'John',
        lastName: 'Smith'
};
// the new constants created below have to be named exactly the same as the object elements they are copying
const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// if you do not want your new constants to match exactly with the object elements they are being assigned to,
// you can change them like so:
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

// you can also destructure an array that is returned through a function like below:
function calcAgeRetirement(year) {
        const age = new Date().getFullYear() - year;
        return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2);
console.log(retirement);
*/
//========================================================================
// ARRAYS IN ES6
//========================================================================
/*
const boxes = document.querySelectorAll('.box');

//ES5
//--------
// turn the above node-list into an array like so:
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
        cur.style.backgroundColor = 'dodgerblue';
});

// ES6
//--------
// use the new and simple 'from' method to transform the node list into an array
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
//========================================================================
// LOOPS IN ES6
//========================================================================
/*
// ES5
//-------

for (var i = 0; i < boxesArr5.length; i++) {
        if(boxesArr5[i].className === 'box blue') {
                continue;
        }
        boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6 - 'FOR...OF' METHOD
//-------
// also using the 'include' method below to test for 'blue' in the classnames we are checking
for (const cur of boxesArr6) {
        if (cur.className.includes('blue')){
                continue;
        }
        cur.textContent = 'I changed to blue!';
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur) {
        return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 - 'FIND INDEX' METHOD
console.log(ages.findIndex(cur => cur >= 18));

// ES6 - 'FIND' METHOD
console.log(ages.find(cur => cur >= 18));
*/
//========================================================================
// THE SPREAD OPERATOR
//========================================================================
/*
// here we create a simple function that adds 4 arguments together
function addFourAges (a,b,c,d) {
        return a+b+c+d;
}

// and here is a simple calling of the above function as an example
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

// ES5: use the apply method to use the below array on the above function 
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6: use the spread operator to apply the same array above to the function above
const sum3 = addFourAges(...ages);
console.log(sum3);

// Here we use the spread operator to join to arrays together
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// NOTE: the spread operator also works on node lists!

// below, we use the apread operator on a node list
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/
//========================================================================
// REST PARAMETERS
//========================================================================
/*
//ES5
function isFullAge5() {
        //console.log(arguments);
        var argsArr = Array.prototype.slice.call(arguments);

        argsArr.forEach(function(cur) {
                console.log((2016 - cur) >= 18);
        });
}

//isFullAge5(1990,1999,1965);
//isFullAge5(1990,1999,1965,2016,1987);

// ES6
function isFullAge6(...years) {
        years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990,1999,1965,2016,1987);
*/
// NOTE: the spread operator and the rest parameter looks EXACTLY the same. so heres the difference:
// the spread operator is used in the function call
// the rest parameter is used in the function declaration for arbitrary number of arguments
/*
function isFullAge5(limit) {
        //console.log(arguments);
        var argsArr = Array.prototype.slice.call(arguments,1);
        console.log(argsArr);

        argsArr.forEach(function(cur) {
                console.log((2016 - cur) >= limit);
        });
}

isFullAge5(21,1990,1999,1965);
//isFullAge5(1990,1999,1965,2016,1987);
*/
// ES6
/*
function isFullAge6(limit, ...years) {
        years.forEach(cur => console.log((2016 - cur) >= limit));
}

isFullAge6(16, 1990,1999,1965,2016,1987);
*/
//========================================================================
// DEFAULT PARAMETERS
//========================================================================

// ES5
//-----
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

        // Set default parameters
        lastName === undefined ? lastName = 'Smith' : lastName = lastName;
        nationality === undefined ? nationality = 'american' : nationality = nationality;

        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/
// ES6
//-----
/*
// Set default parameters directly inside the function constructor declaration
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.nationality = nationality;
}
var john = new SmithPerson('John', 1990);
var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');
*/
//========================================================================
// MAPS
//========================================================================
// Maps is a new type of data structure in ES6
// maps is a new key-value data structure
// we can use any kind of primitive value, objects, and functions as the key
// with objects, we were limited to just strings
// Maps are iterable, which means we can loop through them (which we cannot do with objects)
/*
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer!');
question.set(false, 'Wrong answer, try again!');

console.log(question.get('question'));
console.log(question.size);

if (question.has(4)){
        //question.delete(4);
        console.log('Answer 4 is here');

}

//question.clear();

// you can loop through a map using the 'forEach' method like an array
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));


for (let [key, value] of question.entries()) {
        //console.log(`This is ${key}, and it's set to ${value}`);
        if (typeof(key) === 'number') {
                console.log(`Answer ${key}: ${value}`);
        }
}

const ans = parseInt(prompt('Write the correct answer...'));
console.log(question.get(ans === question.get('correct')));
*/
//========================================================================
// CLASSES
//========================================================================
// classes simply make it easier to impliment inheritance and create objects based on blueprints (function constructors)
// we can add static method, which are not inherited by objects created through the class declaration
// class definitions are not hoisted!
// we can only add methods to classes, and not properties
/*
// ES5 - the traditional way
var Person5 = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
}

Person5.prototype.calculateAge = function() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');

// ES6 - with classes
class Person6 {
        constructor (name, yearOfBirth, job) {
                this.name = name;
                this.yearOfBirth = yearOfBirth;
                this.job = job;
        }

        calculateAge() {
                var age = new Date().getFullYear() - this.yearOfBirth;
                console.log(age);
        }

        // here is a static method
        static greeting() {
                console.log('Hey there!');
        }
}

const John6 = new Person6('John', 1990, 'teacher');

// calling the static method
Person6.greeting();
*/
//========================================================================
// CLASSES and SUBCLASSES
//========================================================================

// ES5 - the traditional way
/*
var Person5 = function(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
}

Person5.prototype.calculateAge = function() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
}



// Create a subclass

// 1: create the subclass
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
        Person5.call(this, name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
}

// 2: connect the subclass to the parent class
Athlete5.prototype = Object.create(Person5.prototype);

// 3: create a method for the athlete subclass
Athlete5.prototype.wonMedal = function() {
        this.medals++;
        console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();
*/

// ES6
//-----
/*
// here is the super-class
class Person6 {
        constructor (name, yearOfBirth, job) {
                this.name = name;
                this.yearOfBirth = yearOfBirth;
                this.job = job;
        }

        calculateAge() {
                var age = new Date().getFullYear() - this.yearOfBirth;
                console.log(age);
        }
}

class Athlete6 extends Person6 {
        constructor (name, yearOfBirth, job, olympicGames, medals) {
                super(name, yearOfBirth, job);
                this.olympicGames = olympicGames;
                this.medals = medals;
        }

        wonMedal() {
                this.medals++;
                console.log(this.medals);
        }
}

const johnAthlete6 = new Athlete6( 'John', 1990, 'swimmer', 3, 10);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/
//========================================================================
// CODING CHALLENGE 8
//========================================================================
/*
// MY SOLUTION
//==============================

// Super Class
//-----------------------------------------
class TownElement {
        constructor (name, buildYear) {
                this.name = name;
                this.buildYear = buildYear;
        }
        // Methods
        calculateAverageAge() {
                var age = new Date().getFullYear() - this.buildYear;
        }
}

// Sub Class 1
//-----------------------------------------
class Park extends TownElement {
        constructor(name, buildYear, trees, area) {
                super(name, buildYear);
                this.trees = trees;
                this.area = area;
        }
        // Methods
        claculateTreeDensity(trees, area) {
                var treeDensity = trees * area;
                return treeDensity;
        }
}


// Sub Class 2
//-----------------------------------------
class Street extends TownElement {
        constructor(name, buildYear, length, sizeClass = 'normal') {
                super(name, buildYear);
                this.length = length;
                this.sizeClass = sizeClass;
        }
        // Methods
        calculateTotalLength() {

        }
        calculateAverageLength() {

        }
}

// PARK REPORT
console.log('---------- PARK REPORT ----------');

// Create objects:
const park1 = new Park('park1', 1900, 500, 10);
const park2 = new Park('park2', 1950, 1000, 20);
const park3 = new Park('park3', 2000, 1500, 30);

const street1 = new Street('street1', 1900, 250, 'tiny');
const street2 = new Street('street2', 1925, 500, 'small');
const street3 = new Street('street3', 1950, 750, 'normal');
const street4 = new Street('street4', 1975, 1000, 'big');

// create Park Maps
const parkTrees = new Map();
parkTrees.set(park1.name, park1.trees);
parkTrees.set(park2.name, park2.trees);
parkTrees.set(park3.name, park3.trees);

const parkArea = new Map();
parkArea.set(park1.name, park1.area);
parkArea.set(park2.name, park2.area);
parkArea.set(park3.name, park3.area);

const parkAges = new Map();
parkAges.set(park1.name, park1.buildYear);
parkAges.set(park2.name, park2.buildYear);
parkAges.set(park3.name, park3.buildYear);


// calculate tree density for each park
for (let[key1, value1] of parkTrees) {
        for (let [key2, value2] of parkArea) {
                if (key1 === key2) {
                        var density = value1 / value2;
                        console.log(`${key1} has a tree density of ${density} per square km`);
                }
        }
}

// calculate average park age
let parkAge, ageSum = 0;
for (let [key, value] of parkAges) {
        parkAge = new Date().getFullYear() - value;
        ageSum += parkAge;
}
ageSum /= parkAges.size;
console.log(`the average age of all parks is ${ageSum}`);

// find all parks with more than 100 trees
for (let [key, value] of parkTrees) {
        if (value > 1000) {
                console.log(`${key} has more than 1,000 trees`);
        }
}

// STREET REPORT
console.log('---------- STREET REPORT ----------');

// create street maps
const streetLengths = new Map();
streetLengths.set(street1.name, street1.length);
streetLengths.set(street2.name, street2.length);
streetLengths.set(street3.name, street3.length);
streetLengths.set(street4.name, street4.length);

const streetClass = new Map();
streetClass.set(street1.name, street1.class);
streetClass.set(street2.name, street2.class);
streetClass.set(street3.name, street3.class);
streetClass.set(street4.name, street4.class);

// total and average length of the towns streets
let totalLength = 0, averageLength = 0;
for (let [key, value] of streetLengths) {
        totalLength += value;
}
averageLength = totalLength / streetLengths.size;
console.log(`The total length of all streets is ${totalLength}`);
console.log(`The average length of all streets is ${averageLength}`);

// size classification of all streets???
*/
// JONA's SOLUTION
//==============================

// Super Class
class Element {
        constructor(name, buildYear) {
                this.name = name;
                this.buildYear = buildYear;
        }
}

// Park Sub-Class
class Park extends Element {
        constructor(name, buildYear, area, numTrees) {
                super(name, buildYear);
                this.area = area; //km2
                this.numTrees = numTrees;
        }
        treeDensity() {
                const density = this.numTrees / this.area;
                console.log(`${this.name} has a tree density of ${density} trees per square km.`);
        }
}

// Street Sub-Class
class Street extends Element {
        constructor(name, buildYear, length, size = 3) {
                super(name, buildYear);
                this.length = length;
                this.size = size;
        }
        classifyStreet() {
                const classification = new Map();
                classification.set(1, 'tiny');
                classification.set(2, 'small');
                classification.set(3, 'normal');
                classification.set(4, 'big');
                classification.set(5, 'huge');
                console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street`);
        }
}

const allParks = [new Park('Green Park', 1987 , 0.2, 215), 
new Park('National Park', 1894, 2.9, 3541), 
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), 
new Street('Evergreen Street', 2008,2.7,2),
new Street('4th Street', 2015, 0.8), 
new Street('Sunset Boulevard', 1982, 2.5,5)];

function calc(arr) {
        const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
        return [sum, sum / arr.length];
}

function reportParks(p) {
        console.log('---------- PARKS REPORT ----------');

        // Density
        p.forEach(el => el.treeDensity());

        // Average Age
        const ages = p.map(el => new Date().getFullYear() - el.buildYear);
        const [totalAge, avgAge] = calc(ages);
        console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

        // over 1000 trees
        const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
        console.log(`${p[i].name} has more than 1000 trees.`);
}

function reportStreets(s) {
        console.log('---------- STREET REPORT ----------');

        // total and average length of all streets
        const [totalLength, avgLength] = calc(s.map(el => el.length));
        console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
        // classify sizes
        s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);

