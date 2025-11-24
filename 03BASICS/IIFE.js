/*
    +++++++++++++++  IMMEDIATAELY INVOKEDE FUNCTION EXPRESSIONS(IIFE) +++++++++++++
    1.THESE FUNCTIONS ARE USED TO EXECUTE THE CODE IMMEDIATELY JUST PUT THE FUNCTION IN THE PARANTHESIS()
    2. TO REDUCE THE POLLUTION IN THE GLOBAL SCOPE VARIABLE
    3. IIFE NEEDS TO BE END SO USE THE SEMICOLON ;

*/


(function chai(){
    // NAMED IIFE 
    console.log(`Database  connected`);    //Database  connected
})();

( (newname) => { 
    // SIMPLE IIFE
    
    console.log(`Database2 connected  ${newname}`);    //Database2 connected  Kulwinder
})("Kulwinder")





/* HERE TWO PARNTHESIS USED
()()
1.USED TO WRITE THE FUNCTION CODE 
2. USED TO CALL THE FUNCTION (EXECUTION )
*/