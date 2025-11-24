const score = 400
//console.log(score)

const balance = new Number(100)
//console.log(balance)

//THIS WILL CONVERT FROM NUMBER TO STRING
//console.log(balance.toString())
//console.log(balance.toString().length)

//MOSTLY USED IN ECOMMERCE WEBSITES => tofixed

//console.log(balance.toFixed(2))   //here two is the floating value


//PRECISED VALUE


let otherNumber = 123.8353
//console.log(otherNumber.toPrecision(3))




/*
    ONE INTERESETED THING
    ------------
    toLocalString
    -------------

*/


let NewNumber = 100000000
//console.log(NewNumber.toLocaleString("en-IN"))




/*
    ++++++++++
    MATHS
    ++++++++

*/





// console.log("HERE WE LEARN THE NEW FUNCTIONS OF MATHS")
// console.log(Math)




/*

        ++++++++++++++
        MATH FUNCTIONS
        +++++++++++++++
*/

console.log(Math.abs(-2))
console.log(Math.round(2.567))
console.log(Math.min(2,3,4,5,6))
console.log(Math.max(3,5,7,6))
console.log(Math.random()*10)
console.log(Math.ceil(4.5))
console.log(Math.floor(3.4))
console.log((Math.random()*10 + 1));

const min =2;
const max =3;
console.log(Math.random()*(max - min + 1))
