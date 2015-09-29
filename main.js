/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: Undefined


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: A string that says Tim


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: A string that says JD


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: The string in the quotes above


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: The number value 40

math = high - "5";
// Q: What is `math` set to?
// A: the number value 45


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;

// Answers Below:
var age = "Tim is " + (today - born) + " years old";


// Store some information following in variables.
var yourName;
var instructorName;

// Update the variables above so the expression reads correctly.
// Answers Below:
yourName = "Michael Gaynor";
instructorName = "Tim D Whisaacres";

// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;