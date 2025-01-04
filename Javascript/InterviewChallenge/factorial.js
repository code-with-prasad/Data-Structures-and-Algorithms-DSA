
// 6. Write a JavaScript program to calculate the factorial of a given number.

// Input: N = 5
// Output: 120
// Explanation: 5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(num){
    
    if(num === 0 || num === 1){
        return 1;
    }

    return num * factorial(num - 1);

;}

try{
    let number = 5;
    const check = factorial(number);
    console.log(`factor of ${number} is ${check}  `)
} catch(error){
    console.error(error.message)
}