// find occurrences
let count =0
const k=2
const nums = [2,4,5,2,1,2]

function arrayOccurrence(nums,k){

for(let i=0;i<=nums.length-1;i++)
    {
    if(nums[i]==k){
        count++ // counts if the data in an array matches with k 
    }
}
if(count>0)
return `Occurrence of a ${k}  in a array is ${count}` // returns if there are occurrence of a number
else
    return "No Occurrence" // returns if there are no occurrence of a given number
}

console.log (arrayOccurrence(nums,k)) // calls a function with arguments and print the returned output