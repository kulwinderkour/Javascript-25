/*
        SCOPES
        TWO TYPES:
        1.LOCAL SCOPE - inside the if else conditions
        2. GLOBAL SCOPE
*/


/*
        AVOID VAR
*/

if(true){
    let a= 10;
    const b=20;
    var c= 30;
}


// console.log(a);     // RETURNS ERROR BECAUSE WE CANNOT USE THE LOCAL SCOPE FOR OUTSIDE
// console.log(b);     //SAME 
console.log(c);     //VAR PRINTS TEH VALUE EVEN AFTER THE SCOPE SO AVOID IT

