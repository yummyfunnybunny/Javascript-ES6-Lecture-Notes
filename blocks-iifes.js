//========================================================================
// BLOCKS AND IIFEs
//========================================================================

// ES6 provides the new below way to write code with data privacy, just like an IIFE from ES5
{
        const a = 1;
        let b = 2;
        var c = 3;
}
console.log(c); // 3
console.log(a + b); // reference error - a is not defined

// var can be logged outside the IIFE, but const and let cannot be logged
