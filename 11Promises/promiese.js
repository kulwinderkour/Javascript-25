// const promise1 = new Promise(function(resolve,reject) {  //do any async task //DB CAlls,cryptography,network calls

//     setTimeout(function(){
//         console.log("async task is complete");
//         resolve()
//     },1000)
// })


// // NOW THE PROMISE CREATED BUT NOW WE NEED TO CONSUME

// promise1.then(function(){
//     console.log("promise consumed")
// })    // .then returns a value using callback

//  //to print promise consumed we need to connect .need with resolve   
//  //     setTimeout(function(){
// //      console.log("async task is complete");
// //      resolve()
// //      },1000)









/*
    ANOTHER WAY TO WRITE THIS
*/



// new Promise   (function(resolve,reject){
//     setTimeout(() => {
//         console.log("Async function 2 is working")
//         resolve();    
//     }, 1000);
// }).then(function(){
//     console.log("Promised 2 is consumed")
//})





/*  
    3rd PROMISE  - accessing user
*/

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Promise 3 is created");
//     })
//     resolve({username: "Chai",example: "chai@example.com"});
// },1000).then(function(user){
//     console.log(user)
// })




/*
    PROMISE 4 - if we get the error
*/


new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"kulwinder",password: 123})
        }
        else{
            reject("404 error occur")
        }
        console.log("Promise 4 is working");
    })
    resolve()
},1000).then((user) =>{
    console.log(user)
    return user.username

})