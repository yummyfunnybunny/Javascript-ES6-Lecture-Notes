//========================================================================
// ARROW FUNCTIONS
//========================================================================

// example array
const birthYears = [1990, 1965, 1982, 1937];

// using the map function in ES5
var ages5 = birthYears.map(function(el) {
    return 2016 - el;
});
console.log(ages5);

//ES6

// Arrow function with 1 element
// el = the current value in the iteration
let ages6 = birthYears.map(el => 2016 - el);
console.log(ages6);

// Arrow function with 2 elements and also template literals added in
// el = current value in the iteration: element 0 = 1990 years
// index = the index of the current interation: element 0 = 0
ages6 = birthYears.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// Arrow function with multiple lines of code
ages6 = birthYears.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});
console.log(ages6);

//========================================================================
// ARROW FUNCTIONS - CONTINUED
//========================================================================

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
box5.clickMe();

// ES6 - 
//----------
// in this ES6 example, the arrow function allows us to use the 'this' method on the box6 object 
// without using any tricks, because in ES6, the arrow function shares the lexical 'this' keyword
// of its surroundings
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


// EXAMPLE 1
//--------
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
