/*
    -------
    ARRAYS
    -------
*/

const Myarr = [1,2,3,5]
const names  = ["Kulwinder","aisha","ashff","zanat"]
const Myarr2 = (2,3,4,6)
// console.log(Myarr[1])
// console.log(names[3])
// console.log(Myarr2)

/*
    --------
    ARRAYS
    METHODS
    --------
*/

Myarr.push(6) //(MOST USED)
// console.log(Myarr)

Myarr.pop()
// console.log(Myarr) 


/*
    TO INSERT AT FIRST 
*/

Myarr.unshift(9)
// console.log(Myarr)

/*
    CHECK OUT THE VALUE IN THE ARRAY LIST
*/

// console.log(Myarr.includes(7))
// console.log(Myarr.indexOf(5))


/*
    TO CONCATENATE
*/

const join1 = Myarr.join()
// console.log(join1)
// console.log(Myarr)


//  IT CHANGES THE DATA TYPE OF THE ARRAY  => STRING
 
// console.log(typeof join1)




/*
    -----------------------
    SLCIE AND SPLICE METHOD  
    1. DIFFERENCE IS THAT IT INCLUDES THE SLICE DOES NOT INCLUDES THE RANGE BUT SPLICE DOES
    2. CHANGE WITH THE ORIGINAL ARRAY
    ------------------------
*/

console.log("A:",Myarr);

const Myn1 = Myarr.slice(1,3);   //THIS WILL RETURN 1,2 USING SLICE METHOD

console.log(Myn1); //SLICE USED IN MYN1

console.log("B:",Myarr)

const myn2 = Myarr.splice(1,3)
console.log(myn2) //SPLICE USED IN MYN2
console.log("C:",Myarr) 