//========================================================================
//                               STRINGS
//========================================================================

// == Creating a Regular Expression ==
// 2 ways to create a reguler expression:

// regEx literal
let regEx1 = /ab+c/;

//* using this methos is good when you know the regular expression will not be changing

// regEx constructor function:
let regEx2 = new RegExp("ab+c");

//* this method id more suited for situations where you know the regular expression will be
// changing, or you dont know the pattern and are getting it from anouther source like user input

// Simple Patterns
