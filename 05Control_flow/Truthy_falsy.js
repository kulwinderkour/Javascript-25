/*
        +++++++++++++ FALSY VALUES ++++++++++++

    1. FALSE
    2. 0
    3. -0
    4. BIGINT(0n)
    5. NULL
    6. UNDEFINED
    7.NaN
    8. ""

*/



/*
        ++++++++++++++  TRUTHY VALUES ++++++++++++
        1. "0"
        2. 'FALSE'
        3. " "
        4. [ ]
        5.{}
        6. FUNCTION(){}

*/



//    HOW TO CHECK THAT ARRAY IS EMPTY

const arr = []
if(arr.length === 0){
    console.log("Array is empty")    //Array is empty
}


// HOW TO CHECK IF THE OBJECT IS EMPTY

const obj = {}
if(Object.keys(obj).length === 0)
{
    console.log("Object is empty");  

    // only by using length the object is not empty
}



/*
    %%%%%%%%%%%% IMPORTANT POINTS %%%%%%%%%%%%

    1. False == 0    returns true
    2. False == ""    returns true
    3. 0 == ""          returns true
*/