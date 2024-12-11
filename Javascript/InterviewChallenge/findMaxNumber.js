

// 2. Write a JavaScript program to find the maximum number in an array. 


function findMaxNumber(arr = []){
    if(!Array.isArray(arr)){
        throw new Error ("Input must be an array");
    }
    if(!arr.every(num => typeof num === "number")){
        throw new Error ("Array must container only numbers");
    }

    return Math.max(...arr);
}

try{
    let maxNumber = findMaxNumber([5, 30, 40, 80, 92, 42])
    console.log("Grest Number is : ", maxNumber);
}catch (error) {
    console.log(error.message)
}

// or 

function findMaxNumberInArray (arr){
    let maxNum = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > maxNum){
            maxNum = arr[i];
        }
    }

    return maxNum;
}
console.log(findMaxNumberInArray([5, 8, 7, 9, 20, 4]));



// Explanation of Each Part 
// -------------------------------------------------------------------------

// Array.isArray(arr):

// Checks if the variable arr is an array.
// !Array.isArray(arr):

// The ! operator negates the condition.
// If arr is not an array, this condition evaluates to true.
// throw new Error("Input must be an array"):
// If the condition is true, this throws an error with the message: "Input must be an array."
// Purpose: Ensures the input is an array. If not, the function halts and reports the issue.

// Array.isArray([1, 2, 3]); // true
// Array.isArray("hello");  // false




// arr.every(num => typeof num === "number"):

// The every method checks whether all elements in the array pass a test defined by the callback function.
// num => typeof num === "number":
// A callback function that checks if each element (num) is of type "number".
// If any element fails this check, every returns false.
// !arr.every(...):
// The ! negates the result, making the condition true if the array contains any non-number values.
// throw new Error("Array must contain only numbers"):
// If the condition is true, it throws an error with the message: "Array must contain only numbers."
// Purpose: Ensures the array contains only numeric values.

// [1, 2, 3].every(num => typeof num === "number"); // true
// [1, "a", 3].every(num => typeof num === "number"); // false