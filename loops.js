//========================================================================
// LOOPS IN ES6
//========================================================================

// ES5
//-------

for (var i = 0; i < boxesArr5.length; i++) {
        if(boxesArr5[i].className === 'box blue') {
                continue;
        }
        boxesArr5[i].textContent = 'I changed to blue!';
}

// ES6 - 'FOR OF' METHOD
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
