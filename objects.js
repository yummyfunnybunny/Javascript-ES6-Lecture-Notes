//========================================================================
// OBJECTS
//========================================================================

// how to define a simple object:
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

// the "THIS" keyword
// - in the above example the "this" refers to the owner of the function
// - this refers to the variable "cars"
console.log(this.gears); // output: 6

// accessing functions inside objects
testGears = car.upShift();

// avoid string, number, and boolean objects
