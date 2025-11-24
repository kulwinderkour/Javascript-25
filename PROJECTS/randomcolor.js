let button = document.querySelector('#start')
let button2 = document.querySelector('#stop')

function discobhai(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i =0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

let intervalId = null
button.addEventListener('click',function(){
    if(intervalId == null){
        intervalId = setInterval(function(){
            document.body.style.backgroundColor = discobhai()
        },1000)
    }
})

button2.addEventListener('click',function(){
    clearInterval(intervalId) 
})
















// button.addEventListener('click',function(e){
//     console.log(e.target)
//     console.log("shuru hoja bhai")
//     intervalid = setInterval(() => {
//         console.log("kulwinder",Date.now())
//     }, (1000));

// })
//     button2.addEventListener('click',function(){
//         clearInterval(intervalid)
//         console.log("haa ha bhai ruk gya")
//     })