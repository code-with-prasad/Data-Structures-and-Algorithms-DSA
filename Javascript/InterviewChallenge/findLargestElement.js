
// Write a javascript program to find the largest element in nested array ;


function findLargestInNestedArray(nestedArray){
    return Math.max(...nestedArray.flat(Infinity));
}

const nestedArray = [
    [2, 8, 9, 3, 7],
    [12, 20, 4, 6, 3],
    [48, 12, 32, 9]
]

console.log(findLargestInNestedArray(nestedArray));

// Explanation:
// ---------------------------------
// flat(Infinity):

// Flattens the nested array into a single array, regardless of depth.
// For example, [[1, 2], [3, [4]]] becomes [1, 2, 3, 4].
// Math.max(...array):

// Finds the maximum value in the flattened array.
// The spread operator ... expands the array elements as individual arguments to Math.max.


// This is my idea 

// let arr = [
//     [5, 7, 8, 2, 3],
//     [12, 10, 6, 9]
// ];

// let max = 0;

// arr.map(item=>{
//     item.map(data=>{
//         if(data > max){
//             max = data;
//         }
//     })
// })

// console.log(max);