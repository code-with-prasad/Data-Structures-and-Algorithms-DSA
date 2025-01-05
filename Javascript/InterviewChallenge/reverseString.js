function findLargestInNestedArray(nestedArray) {
    // Flatten the nested array and find the largest element
    return Math.max(...nestedArray.flat(Infinity));
  }
  
  // Example usage:
  const nestedArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, [9, 10, 11]]
  ];
  
  console.log(findLargestInNestedArray(nestedArray)); // Output: 11
  