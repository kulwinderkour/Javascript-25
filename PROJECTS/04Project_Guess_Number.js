const randomNumber = (parseInt(Math.random()*100+1))
const submit = document.querySelector('#subt')

/*
USER INPUT  - FROM THE GUESSFIELD
*/

const user_input = document.querySelector('#guessField')
const guess_slot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const low0rHi = document.querySelector('.low0rHi')
const startover = document.querySelector('.resultParas')


/*
    INSERTED VALUES
*/


const p =document.createElement('p')
let prevGuess = []
let numGuesses =1
let playgame = true


if(playgame){
    // are you avaialble for play game if you are able to then add event listner - click
    submit.addEventListener('click',function(e){
         e.preventDefault()
        const guess = parseInt(user_input.value)
        validateguess(guess) 
        });
}



function validateguess(guess){
    // Check the validation of the input from 0-100
}


function Checkguess(guess){
    //this display the message 
}

function displayguess(guess){
    // clean the values update the array
}


function displaymessage(message){
    // in loworhi we pass a message and it prints
}


function endgame(){

}

function newgame(){

}