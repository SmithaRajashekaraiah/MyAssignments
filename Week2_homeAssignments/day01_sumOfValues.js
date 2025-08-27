//

let n=5
let sum=0

function add(n)
{
    for(let i=1;i<=n;i++){
        sum +=i
        console.log("i value is " +i)
        console.log("current sum= "+sum)
    }
    return sum
}
    
console.log(add(n))