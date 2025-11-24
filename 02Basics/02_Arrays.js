// /*

//     TO TAKE ONE ARRAY INSIDE OTHER

// */

// const actors1 = ["sharukhan","sallubhai","amir khan","sidharth malhotra"]
// const actors2  = ["gippy","premdhillon","diljit","amrinder"]

// actors1.push(actors2)
// // console.log(actors1)
// // console.log(actors1[3][1])


// const allHeroes =actors1.concat(actors2) 
// //IT EASILY ADD BOTH ARRAYS WITHOUT  THIS => "[]" IN RETURN
// // console.log(allHeroes)


// //      ------OTHER EASY METHOD -------

// const all_heroes = [...actors1,...actors2]
// // console.log(all_heroes)



// //         ------FLAT CASE -------

// const another_array= [1,2,3,[2,3,55],35,54,[3,45,46],3,56,7,[4,5,6,7]]
// const real_array = another_array.flat(Infinity)
// // console.log(real_array)






// // ######################
// let score1 = 100;
// let score2 =200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3))











// // ****************************************
console.log(Array.isArray("Kulwinder"))   // ITE PRINTS THE ARRAYS OF SINGLE WORD

//    OUTPUT:

[
  'K', 'u', 'l',
  'w', 'i', 'n',
  'd', 'e', 'r'
]




console.log(Array.from("Kulwinder"))

console.log(Array.from({Name:"Kulwinder"}))