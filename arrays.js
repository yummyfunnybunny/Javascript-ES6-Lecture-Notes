//========================================================================
// ARRAYS IN ES6
//========================================================================

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
// use the new and simple 'from' method to transform the 
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
