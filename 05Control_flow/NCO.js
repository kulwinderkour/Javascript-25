/*
        NCO = NULLISH COALESCING OPERATOR
        1. NULL
        2. UNDEFINED
*/

let val1;
val1 = 5 ?? 10;   // used for backend for database   (first value assign) 
let vale1 = null ?? 10;   //returns 10
let value1 = undefined ?? 10; // returns 10
let value2 = undefined ?? null;  // returns null
let value3 = null ?? 10 ?? 15;  // returns 10

console.log(value1)
console.log(vale1)
console.log(val1)
console.log(value2)
console.log(value3) 




/*
        &&&& TERNIARY OPERATOR &&&&
        CONDITION ? TRUE : FALSE
*/


const icecube = 100;
icecube >90 ? console.log("valid")  : console.log("invalid");   // returns valid 