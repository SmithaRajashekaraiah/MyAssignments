// array with intersection 
let arr1=[23,56,77,23,90]
let arr2=[56,45,23,66,56] //[23,56,77,23,90] , [55,66,77,88]
let interArray = new Array();

function intersection(arr1,arr2)
{
for(let i=0;i<=arr1.length-1;i++)
    {
        for(let j=0;j<=arr2.length-1;j++)
      {
            if(arr1[i]==arr2[j] && !interArray.includes(arr1[i])){
            interArray.push(arr1[i])  // appends the data to an array
            }
      }
    }
    if(interArray.length>0)
    return interArray
else
    return "No matching data"
}

console.log(intersection(arr1,arr2))// displays the returned output
