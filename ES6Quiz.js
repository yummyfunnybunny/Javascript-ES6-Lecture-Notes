// ======================================
// ES6 Quiz Questions
//=======================================

/*
-----------------------------------
the spread operator
-----------------------------------
1. If you want to get the sum of the below array:
var agesArray = [1,2,3,4,5,6];

-the spread operator
- Destructuring
- Rest Parameters
- Turn into a map

2. If you wanted to combine the below two arrays
into one array, what function do you use?
var RSVPedListArray = ["Doug", "Jake", "Alison","Joe"];
var RejectedListArray = ["Kirsty", "Jack", "Jeffrey"];

-----------------------------------
Arrow Functions
-----------------------------------
1. change the below function into an arrow function:

function isPositive(number) {
    return number >= 0;
}

answer: let isPositive = number => number >= 0;
----------
2. change the below function into an arrow function:

function randomPercent(){
    return Math.random(1)*100;
}

answer: let randomPercent = () => Math.random(1)*100;
----------
3. change the below function into an arrow function:

document.addEventListener("click", function() {
    console.log("i clicked!");
})

answer: document.addEventListener("click", () => console.log("i clicked!"));
----------
4. what is the difference between the spread operator and rest Parameters

answer: 
the spread operator is used in the function call
the rest parameter is used in the function declaration for arbitrary number of arguments

5. How is the "This" keyword affected by the arrow function?

answer: the "this" keyword is defined within the scope that it is called in
regular functions: defined the "this" keyword in the window scope

6. when should you not use arrow functions?

answer: with "call", "bind", "apply", or with the "new" operator as a constructor method
-----------------------------------
Arrays
-----------------------------------

*/