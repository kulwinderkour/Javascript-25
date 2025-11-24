/*
        CONVERSION TYPES
*/

/*
    STRING
*/
let score = "34as";
console.log(typeof score)
let score1 = Number(score)   //  WE USED NUMBER NOT INTEGER
console.log(typeof score1);
console.log(score1)   //score is 34as -->> NaN (NOT A NUMBER)  -- BUT DATATYPE IS THE NUMBER
//AFTER CONVERTING FROM STRING TO NUMBER IT RETURN NaN

/*
    NULL TYPE
*/

let name = null;
let name2 = Number(name);
console.log(typeof name2);  //returns null as number 
console.log(name2)  // number = 0  



/*
    UNDEFINED
*/

let type= undefined
let type1 = Number(type);
console.log(typeof(type1))   // undefined = number
console.log(type1)     //NaN(not a number) type      


/*
    BOOLEAN
*/

//typeof = number
//number = 1(for true)  and 0 (for false)
// 1 => true and 0 => false


let isLoggedIn= "";  //returns false
let loggedin = Boolean(isLoggedIn);
console.log(typeof(loggedin));
console.log(loggedin)