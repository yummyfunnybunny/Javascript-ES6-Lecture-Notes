//========================================================================
// THE SPREAD OPERATOR
//========================================================================


// here we create a simple function that adds 4 arguments together
function addFourAges (a,b,c,d) {
        return a+b+c+d;
}

// and here is a simple calling of the above function as an example
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);  // 81

// ES5: use the apply method to use the below array on the above function 
var ages = [18,30,12,21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);  // 81

// ES6: use the spread operator to apply the same array above to the function above
const sum3 = addFourAges(...ages);
console.log(sum3);  // 81

// Here we use the spread operator to join two arrays together
const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); // [ "John", "Jane", "Mark", "Lily", "Mary", "Bob", "Ann" ]

// NOTE: the spread operator also works on node lists!
// a nodeList is a collection of nodes extracted from a document.
// a "node" is an HTML element.
// the "DOM" is a tree structure that represents the HTML of the website, and every
// HTML element is a 'node' on the tree

// below, we use the apread operator on a node list
const h = document.querySelector('h1'); // creates a notelist with all 'h1' html elements 
const boxes = document.querySelectorAll('.box');  // creates a nodelist with all elements with a class of 'box'
const all = [h, ...boxes];  // combines the above two nodelists into a single nodelist

Array.from(all).forEach(cur => cur.style.color = 'purple'); 
