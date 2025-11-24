/*
    --------------
    DATES FUNCTION
    ---------------
*/

let newDate = new Date()
console.log(newDate)

console.log(newDate.toDateString())
console.log(newDate.toLocaleDateString())

console.log(typeof(newDate))

let MycreatedDate = new Date(2024,6,10)
console.log(MycreatedDate.toDateString())
console.log(MycreatedDate.toLocaleDateString())


let ArrangMonth = new Date("2023-02-12")
console.log(ArrangMonth.toLocaleDateString())


/*
    TIMESTAMPS
*/

let Timestamp = Date.now()
console.log(Timestamp)
console.log(ArrangMonth.getTime())

console.log(Date.now()/1000)  // it will give in milliseconds

let NewDate = new Date()
console.log(NewDate.getMonth() + 1)

