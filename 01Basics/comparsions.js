/*
        --------------
        COMPARISONS
        --------------
*/

   
console.log(null > 0)   //false
console.log(null >= 0)  //true
console.log(null <= 0) //true


console.log(undefined == 0) 
console.log(undefined > 0)
console.log(undefined < 0) 




// STRICT CHECK (===)

console.log(3==4)

/*
1). === is used to compare and check the datatype
2). and using symbol datatype it will always give the false

*/


/*
        USE OF SYMBOLS
*/

const id =Symbol('123')
const id2 = Symbol('123')
console.log(id)
console.log(id2)
console.log(id === id2) // THEY ARE NOT EQUAL AT ALL FOR SYMBOL GENERATES EVERY TIME A DIFFERENT DATATYPE








/*
        --------------
            ARRAYS
        -------------


*/



const heroes = ["shaktiman", "batman","spiderman"]
console.log(heroes)

// TO STORE THE OBJECTS

let dumb = {
        name :"Kulwindr",
        age : 897
}
console.log(dumb)



//FUNCTONS
const mfunction = function(){
        console.log("hello world")
}
console.log(typeof mfunction)

