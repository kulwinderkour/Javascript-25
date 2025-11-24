function sayname(){
    console.log("K")
    console.log("U")
    console.log("L")
    console.log("W")
    console.log("I")
    console.log("N")
    console.log("D")
    console.log("E")
    console.log("R")
}

sayname()


function addtwonumber(number1 , number2 ){
    console.log(number1 + number2)     
    let result = number1 + number2
    return result

    //other method
    return number1 + number2
}

addtwonumber(3,4)
addtwonumber(3,"4")
addtwonumber("3",4)
addtwonumber(3,"a")
addtwonumber(3,null)   // IT PRINTS ONLY 3


const result = addtwonumber(3,4)
console.log("Result:",result)   //IT RETURNS UNDEFINED BECAUSE WE ARE NOT RETURNING ANTHING FOR THIS WE HAVE TO RETURN NOT CONSOLE.LOG









//**********************************






/*
        SHOW A MESSAGE TO THE LOGIN USER 
*/


function returnmessage(usermessage){
     let result = usermessage;
     return result;
}

console.log("hiii you are loggged in ")


/*
     ANOTHER INTERSTING METHOD USING BACK TICKS IN SCOPE
*/


function returnMsg (username){
    return `${username} hogya login`
}

console.log(returnMsg("Kulwinder"))
console.log(returnMsg())   //returns undefined hogya login  



// SO WE CAN ADD IF ELSE STATEMENT  TO CHECK THE VALUE



function returnMsg (username){
    if(username === undefined){
        // console.log("Please Enter a username");
        return
     }
     else{
     return `${username} hogya login`
     }
 }
console.log(returnMsg())










/*
    %%%%%%% ANOTHER INTERSTING WAY %%%%%%%%%
*/




function returnMsg (username){
    if(!username){
        // console.log("Please Enter a username");
        return
    }
    else{
    return `${username} hogya login`
    }
}


// console.log(returnMsg("Kulwider"))


/*
    AND IF YOU DEFINE THE FUNCTION VALUE IN 
    FUNCTION RETURNMSG(USERNAME = "SAM"){
    -----------
    }
    CONSOLE.LOG(RETURNMSG("kULINDER"))     THIS KULINDER WILL OVERWRITE TO SAM 
*/















//**********************************************





/*
    HOW TO USE THE REST OPERATOR 
    WHEN WE KEEP ADDING THE ITEMS IN THE CART OF THE SHOPPING APP AND THEN HOW THE CART ADD ALL THE PRICE OF THE ITEMS
*/

//REST OPERATOR = ...   (SAME AS SPREAD OPERATOR BUT THE FUNCTION IS DIFFERENT HERE )


function cartadditem(...itemprice){
    return itemprice
}

/*
    HOW WE ADD THIS ARRAYS VALUES WE HAD ALREADY DISCUSSED
*/
// console.log(Math.reduce(cartadditem(200,400,332)))    //this is the wrong way to use the reduce function returns error


/*
CORRECT WAY TO USE THE REDUCE FUNCTION  = to add the objects in the arrays
*/



const result_items= cartadditem(100,200,120).reduce((sum,price) => sum + price ,0);
console.log(result_items)





function AmazonCart(...itemsList){
    return itemsList
}

let total = AmazonCart(100,2000,2303,241).reduce((sum,price) => sum +price ,0)
console.log(total);



function amazon_cart(...items){
    return items
}

const total_price = amazon_cart(45000,20000).reduce((sum,price) => sum + price, 0)
console.log(total_price)





/*
    FUNCTIONS INSIDE OBJECTS
*/

const user ={
    username:"Kulwinder",
    id : 123
}

function handleObject(anyobject){
    //HERE ANYOBJECT IS THE OBJECT THAT STORES NOT ONLY USER BUT ANY OBJECT
    console.log(`Username is ${anyobject.username} and id is ${anyobject.id} `)
}

// handleObject(user)


// ANOOTHER AMAZING WAY TO CALL A FUNCTION

handleObject(
    {
        username:"shote",
        id:34
    }
)