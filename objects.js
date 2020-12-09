//========================================================================
// OBJECTS
//========================================================================

// == defining a simple object ==
var car = {
  make: "VW",
  model: "Jetta",
  year: 2015,
  color: "beige",
  gears: 6,
  currentGear: 1,
};
// always a name:value pair, separated by a :
// defining an object this way is called an "OBJECT LITERAL"
// name:value pairs, together, are called "PROPERTIES"

// two ways to access object properties:
console.log(car.make); // output: "VW"
// or
console.log(car["make"]); // output: "vw"

// properties can also be functions instead of name:value pairs
var car = {
  make: "VW",
  modle: "Jetta",
  year: 2015,
  color: "beige",
  gears: 6,
  currentGear: 1,
  upShift: function () {
    if (currentGear != this.gears) {
      currentGear += 1;
    }
  },
};

// == the "THIS" keyword ==
// - in the above example the "this" refers to the owner of the function
// - this refers to the variable "cars"
console.log(this.gears); // output: 6

// accessing functions inside objects
testGears = car.upShift();

//*NOTE* avoid string, number, and boolean objects

// == Objects and Pass-By-Value VS Pass-By-Reference ==
/*
- In JavaScript, there is the concept of 'pass-by-value', and 'pass-by-reference'.

- When you pass a variable with a primitive value (boolean, null, undefined, number, BigInt, string, symbol) 
  into a function, you are passing a copy of that variable into the function and not the variable itself. This
  means that any changes you make to the variable inside of the function will not affect the variable outside of 
  the function
*/
let checkingAccount = 100000;

function addInterest(_account) {
  const interest = 0.01;
  _account += _account * interest;
  console.log(_account); // output: 101000
}

addInterest(checkingAccount);
console.log(checkingAccount); // output: 100000

//*NOTE* the changes made inside of the function had no affect on the variable outside of the function.

/*
- when you pass a variable containing an object into a function, you are passing a reference to the object itself.
- This means that any changes you make to the object inside of the function WILL CHANGE the actual object outside 
  of the function
*/
let assetList = {
  house: 100000,
  car: 32000,
  boat: 12000,
};

function depreciateValue(_assetList, _asset, _percent) {
  _assetList[_asset] -= _assetList[_asset] * _percent;
  console.log(_assetList[_asset]); // output: 95000
}

depreciateValue(assetList, house, 0.05);
console.log(assetList["house"]); // output: 95000

/*
- there is a work-around to this, as pass-by-reference can sometimes get in the way of what are are trying to do.
- Lets say you are trying to make changes to an object while keeping the original in-tack:
*/

const query = {
  duration: 5,
  difficulty: "easy",
  limit: 10,
};

const queryCopy = { ...query };

/*
 we use destructuring on the original query which takes each property out of the origina one-by-one and places them
 inside the new object that we've created.
*/
