// 1. parameter is the name and the argument is the value
// 2. per google -- console.log doesnt affect the flow of code whereas return causes reactions
// 3. the implications are that you can call a function rather than having to rewrite code over and over again.

//PALINDROME
 function checkPalindrome(word) {
    const theWord = word.split("")
    console.log(theWord)
    const reverseWord = word.split("")
    reverseWord.reverse()
    console.log(reverseWord)

    for(let i = 0; i < theWord.length; i++){
        if (theWord[i] !== reverseWord[i]){
            return 'False'
        }
    }
    return 'True'
}

const check = checkPalindrome("racecar")
console.log(check) 

// CHECK A LIST

const students = ['Chase', 'Brooke', 'Frankie']

function checkForStudent(firstName, students){
    for (let i = 0; i < students.length; i++){
        if(firstName[i] !== students){
            return 'False'
        } else {
            return 'True'  
        }
    }
}
console.log(students.includes('Brooke'))

// SUM ARRAY

const numbersForSum = [22, 45, 38]
let sum = 0

function sumArray(numbersForSum){
    for(let i = 0; i< numbersForSum.length; i++){
        sum += numbersForSum[i]
    }
    return sum
}
console.log(sumArray(numbersForSum))