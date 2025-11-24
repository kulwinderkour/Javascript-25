/*
    ----------------
    OBJECT LITERALS - ARE THE EASIEST WAYS TO CREATE AN OBJECT IN JAVASCRIPT
    ----------------
*/



const JsUser = {
    name :"Kulwinder",
    "full name" : "Kulwinder kour",
    age :20,
    location:"Jammu",
    email: "kulwinder@gmail.com"
}



console.log(JsUser)
console.log(JsUser.email)
console.log(JsUser["email"])   // ANOTHER WAY TO CALL A PARTICULAR FUNCTION

console.log(JsUser["full name"])  // ONLY WAY TO WRITE A CODE THE WORD WHICH INCLUDES SPACE






//  ------ FOR CHANGING IN THE FUNCTIONS


JsUser.email = "WWW.KULWIDER.COM"
// Object.freeze(JsUser)       // (NO CHANGES WILL BE THERE AFTER USING FREEZE)
JsUser.email = "www.kalumadair.com"     //THIS WILL NEVER PRINTS
console.log(JsUser)




// GREETING FUNCTIONS

JsUser.grettings = function(){
   console.log("good morning");
};

console.log(JsUser.grettings())  //undefined




// *********************************************



/*

    **IMPORTANT DATATYPE - SYMBOL  (it always returns a new value everytime)

*/

const secret = Symbol("Key 1");

const NewSymbol = {
    name:"kulwinder",
    [secret] : "Mykey1"
};


console.log(NewSymbol.secret)  //RETURNS UNDEFINED     (YOU CANNOT DEFINE IN THIS WAY IT SHOULD ALWAYS INCLUDE "[]")
console.log(NewSymbol[secret]) // RETURNS  MYKEY1
console.log(typeof(secret))   // DATAYPE -  SYMBOL




/*
    NOW GREETINGS TO A PARTICULAR FUNCTION BY CALLING
*/



JsUser.greeting2 = function(){
    console.log(`Helo the js user, ${this.name}`);
}

console.log(JsUser.greeting2())    // using "()" this is very important

