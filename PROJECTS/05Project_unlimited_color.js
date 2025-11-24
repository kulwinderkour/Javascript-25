// RANDOM COLOR GENERATOR


const randomcolor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i =0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;}

    let intervalId = null;


    const startchangecolor = function(){
        if(intervalId ==null){
        intervalId = setInterval(changeBgColor,1000)
        }
        function changeBgColor(){
            document.body.style.backgroundColor = randomcolor();
        }
    };

    const stopchangecolor = function(){
       clearInterval(intervalId);
       intervalId = null

    };
    document.querySelector('#start').addEventListener('click',startchangecolor)
    document.querySelector('#stop').addEventListener('click',stopchangecolor)
