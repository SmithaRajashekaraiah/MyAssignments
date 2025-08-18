var city='Bangalore'
//var city='Chennai'
let marks=85
// marks=90
const isWeekend=true
// isWeekend=false
let futureGoal

console.log("I live in "+ city)
console.log(typeof city)

console.log(marks+10)
console.log(typeof marks)

if(isWeekend)
    console.log("Relax")
else
    console.log("Work")
console.log(typeof isWeekend)
console.log(typeof futureGoal)

/* Notes:
var --> When used var to redeclare the variable city it allowed and also reassign the var city 
        was allowed without any error.
let --> When tried to redeclare let marks, it throwed an error as redeclaration is not allowed, where as
        reassigning was allowed
const --> redeclaring and reassigning const isWeekend was not allowed.
 */
