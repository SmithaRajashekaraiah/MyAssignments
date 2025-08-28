// sum of values

let n=5
let sum=0

function add(n)
{
    for(let i=1;i<=n;i++){
        sum +=i
        console.log("i value is " +i) // prints i each iteration
        console.log("current sum= "+sum) // prints sum for each iteration
    }
    return sum
}
    
console.log(add(n)) // prints the returned sum