/*
    USE OF THIS FUNCTION
*/

const user = {
    username  : "Kulwinder",
    age : 95,
    welcomefunction: function(){
        console.log(`${this.username}, hiiii`)   // to access these variables we use the "this".variable only then we are ablt to access for current
        console.log(this);
        
    }  

}

user.welcomefunction()
user.username = "komal"
user.welcomefunction()
console.log(this);   //returns EMPTY






//   +++++++++  ANOTHER FUNCTION +++++++++++

function kot(){
    console.log(this);    
    let name = "kulwinder"
    console.log(this.name)
}
kot()





/*
    ARROW FUNCTION (=>)  IS USED INSTEAD OF FUNCTION KEYWORD
*/


const newfunction = () => {
    myname = "Kulwidner"
    age = 34;
    console.log(this.myname)    // UNDEFINED
    console.log(this)   //  empty function ()
    console.log(myname)  //  Kulwinder

}

newfunction()



const arrowfun = (num1,num2) =>{
    return num1 + num2
}

console.log(arrowfun(3,4))




/*
        IMPLICIT RETURN -- NO USE OF  THIS curly braces {} AND RETURN
        RETURN DOES NOT USE WITH PARANTHESE ()
*/





const addnew  = (num1,num2) => num1 + num2
const add2new  = (num1,num2) => (num1 + num2)
 
console.log(addnew(5,4))
console.log(add2new(5,4))




/*
    TO RETURN THE OBJECT IT IS NECCASSRY TO WRAP IN THE PRANTHESIS ()

*/ 

const objfun = () => ({newname: "Kulwidner"})
console.log(objfun());    // { newname: 'Kulwidner' } 