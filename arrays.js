//========================================================================
// ARRAYS IN ES6
//========================================================================

// Creating An Arrays
// ---------------------------------
// two ways to create an array:
//      array literal syntax:
const foods = ['Pizza', 'Pasta', 'Burger', 'Cake'];

// array constructor:
const foods = new Array('Pizza', 'Pasta', 'Burger', 'Cake');

// 


// From Method
// ---------------------------------
const boxes = document.querySelectorAll('.box');

/*
SIDE NOTE:
the difference between a nodeList and an array:
- a nodeList is a collection of HTML elements that have been selected using the 'querySelectorAll' method, and
        an array is created using array literal/array constructor syntax
- both have access to the '.length' property
- both can be accessed by using a numeric index
*/      const b = boxes[2]; // 3rd nodelist item
        const f = foods[1]; // 2nd food array item 
/*
- you cannot use common array methods on a nodelist (push, pop, slice, join, etc)
*/



// use the new and simple 'from' method to transform the node list into an array
const boxesArr6 = Array.from(boxes);

// than run through the newly created array using the 'forEach' method to change the background color of the selected html elements
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
//or the long version...
boxesArr6.forEach((cur) => {
        cur.style.backgroundColor = 'dodgeblue';
});



