// const clock = document.getElementById('clock')
// // const clock = document.querySelector("#class")  using querySelector



// /*
// SETINTERVAL METHOD = EVENTS  (**IMPORTANT)
// */


// setInterval(function(){
//     let date = new Date()
//     //console.log(date.toLocaleTimeString())
//     clock.innerHTML = date.toLocaleTimeString();

// },1000)



const clock = document.getElementById('clock')
setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)