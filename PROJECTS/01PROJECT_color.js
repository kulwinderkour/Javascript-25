const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button){
    console.log(button)
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        switch(e.target.id){
            case "blue":
            body.style.backgroundColor = e.target.id

            case "green":
            body.style.backgroundColor = e.target.id

            case "red":
            body.style.backgroundColor = e.target.id
            case "pink":
            body.style.backgroundColor = e.target.id
        }



        // if(e.target.id === "blue")
        // {
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "green")
        // {
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "red")
        // {
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === "pink")
        // {
        //     body.style.backgroundColor = e.target.id
        // }
    })
})