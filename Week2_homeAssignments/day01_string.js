// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Input: s = "Hello World"
// Output: 5

let s = "Hello World"
let arr =s.split(" ")

let lastWordLength=arr[arr.length-1].length
console.log(`The last word is "\ ${arr[arr.length-1]} "\ with length ${lastWordLength}`)

/*
Example 2:
Input: s = " fly me to the moon "
Output: 4
*/

let s1=" fly me to the moon "
s1=s1.trim()
let arr1=s1.split(" ")
let lastWord=arr1[arr1.length-1]
console.log(`The last word is \" ${lastWord}" with length ${lastWord.length}`)

/*
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
*/

let str1, str2
function isAnagram(str1,str2){
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()

    arrStr1=str1.split("")
    arrStr2=str2.split("")

    sortString1=arrStr1.sort()
    sortString2=arrStr2.sort()

    for(let i=0;i<=sortString1.length-1;i++){

        if(sortString1[i]!=sortString2[i])
        {
            return false
        }
    }return true
    //console.log(arraysEqual(sortString1, sortString2))
    
}
console.log(isAnagram('Listen','Silent'))
console.log(isAnagram('Hello','World'))
