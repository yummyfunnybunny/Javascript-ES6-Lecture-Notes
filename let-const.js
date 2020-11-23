//========================================================================
// LET & CONST
//========================================================================

// Variable declarations in ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
age5 = 32;
console.log(name5); // Jane Miller
console.log(age5);  // 32
// ----------
// Variable declarations in ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6); // Jane Smith

// Let and Const in functions (ES5)
function driversLicence5(passedTest) {
        if (passedTest) {
            console.log(firstName);
            var firstName = 'John';
            var yearOfBirth = 1990;   
        }
        console.log(firstName + ', Born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}
driversLicence5(true);

// Let and Const in functions (ES6)
function driversLicence6(passedTest) {
        console.log(firstName);
        let firstName; // 'let' can be declared outside of the function below but not assigned and still be used
        const yearOfBirth = 1990; // 'const' must be declared AND assigned in order to be used in the function below
        if (passedTest) {
                firstName = 'John'; // first name can techinically be changed at some point (let)
                yearOfBirth = 1990; // year of birth cannot ever be changed (const)
        }
        console.log(firstName + ', Born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}
driversLicence6(true);

//-------------
// using let in a FOR statement
let i = 23;

for(let i = 0; i < 5; i++){
        console.log(i); // 0,1,2,3,4
}
console.log(i); // 23
