/*
    -----------------
    SINGLETON - IS A DESIGN PATTERN THAT ENSURES THE ONE INSTANCE(COPY OF THE OBJECTS) EXISTS THROUGHOUT THE APPLICATION
    ------------------
*/

// SUPPOSE WE ARE CREATING A TINDER APP

const tinderUser = new Object()    //SINGLTON METHOD
const tinderusre ={}    //THIS IS A OBJECT LITERAL METHOD(NOT SINGLTON)


// console.log(tinderUser)          //RETURNS AN EMPTY FUNCTION 
// console.log(tinderUser)          //RETURNS AN EMPTY FUNCTION {}


//**************************


// ADD INTO IT USING ID
tinderUser.id ="123"
tinderUser.name ="Kulwinder"
tinderUser.isLoggedin = false
console.log(tinderUser)


/*
    TO GET THE OBJECT VALUES FROM THE ARRAYS OR THE KEYS VALUES
*/

console.log(Object.keys(tinderUser))


//HERE ID,NAME,ISLOOGEDIN ARE KEYS
// and 123,kulwinder,false are the values 







//*************nested rule in array****************

const username = {
    email : "kulwinder@gmail.com",
    name :{
        fullname:{
            userfullname:"kulwinder",
            lastname:"kour"
        }
    }
}


// console.log(username.name.fullname)   //ONLY BY USING USERNAME.FULLNAME (IT WILL RETURN UNDEFINED)
// console.log(username.name.fullname.lastname)





//************************** */

/*
    TO DISPLAY THE OBJECTS COMBINELY
*/


const obj1 ={1:"a",2:"b",3:"c"}
const obj2 = {4:"d",5:"e",6:"f"}

const obj3 = {obj1,obj2}

// console.log(obj3)   // SAME ARRAY PROBLEM THAT IT WILL DISPLAY THE ONE OBJECT INSIDE OTHER 

const obj4 = Object.assign({},obj1,obj2)  // "{}" THIS WILL HELP EASILY TO DIFFERENTAITE
// console.log(obj4)   // THIS WILL PRINT COMBINELY




/*
    OTHER METHOD TO CONCATNATE USING SPREAD METHOD
*/

const obj5 ={...obj1,...obj2}

// console.log(obj5)






/*
    ---------------REAL TIME APPLICATIONS OF OBJECTS----------------------------
    1.USER PROFILES
    2.API RESPONSES  {DATA: [...] , STATUS:200}    THIS ... MEANS THAT VALUE IS NOT SPECIFIED YET
    3.APP STATE MANAGMENT 
    4.CONFINGURING SETTINGS 
    
    
    */






/*
        VALUES FROM THE DATABASE
*/


const users = [
    {
        id:1,
        name:"Kulwinder"
    },

    {
        id :2,
        name : "jenny"
    },

    {
        id : 3,
        name :"auck"
    }
]

// users[1].name

console.log(users[1].name)    //jenny






// !!!!!!!!!!!!!! TO ADD THE ARRAYS INSIDE OTHER ARRAYS USING ENTERIES METHOD  !!!!!!!!!!!!!!


console.log(Object.entries(tinderUser))   //[ [ 'id', '123' ], [ 'name', 'Kulwinder' ], [ 'isLoggedin', false ] ]






/*
    %%%%%%%%%%  HASOWNPROPERTY  %%%%%%%%%%%% TO CHECK WHETHER THE FUNCTION IN PRESENT INSIDE IT OR NOT
*/


console.log(tinderUser.hasOwnProperty("isLoggedin"));
