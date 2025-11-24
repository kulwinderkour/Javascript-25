let user = 0;
let computer = 0;

const newchoices = document.querySelectorAll(".choice1, .choice2 , .choice3")

const computerchoice = () =>{
    // we will create the resuable components
    // rock , paper,choices
    let option =["rock","paper","scissor"]
    const randomindex = Math.floor(Math.random() * 3)
    return option[randomindex]
}


const playGame = () =>{
    console.log("user Choice:",userChoice)
    //GENERATE COMPUTER CHOICE
    const computer_choice = computerchoice()
    console.log("computer choice",computer_choice)

}


newchoices.forEach((choice) =>{
    console.log(choice)
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id")
        // console.log("Choice is clicked",userChoice)
        playGame(userChoice)
    })
})