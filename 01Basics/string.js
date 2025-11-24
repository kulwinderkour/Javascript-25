/*
    *********
    STRINGS
    ********
*/

const name = "kulwinder"
const repoCount = 5;

//console.log(name + repoCount + " value") (old method)

console.log(`The name of the dumbo is ${name} and repocount is ${repoCount}`);


//  `` : THIS IS BACKTICKS USED FOR STRING INTERPULATION (USED TO INJECT THE PLACEHOLDERS )





/*
        WAYS TO DECLARE STRINGS
*/


const GameName = new String ("verse winder")
console.log(GameName.__proto__);
console.log(GameName.toUpperCase())
console.log(GameName.strike())
console.log(GameName.sub())
console.log(GameName.sup())
console.log(GameName.trim()) // used to remove spaces
console.log(GameName.search("w"))
console.log(GameName.italics())
console.log(GameName.fontcolor("red"))
console.log(GameName.charAt(7))

console.log(GameName.split('-'))




const NewString = GameName.substring(0,5) // does not takes the negative values
console.log(NewString)

const anotherstring = GameName.slice(-11, 6)   //it takes the negative values of most in use 
console.log(anotherstring)



const url = "https://Kulwindeer2.com";
console.log(url.replace("2", "-"))   //2 IS REPLACED BY HYPHEN (-)
console.log(url.includes('kour'))