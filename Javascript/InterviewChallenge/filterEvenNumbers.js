
// 5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers. 

function filterEvenNumber(arr){

    if(!Array.isArray(arr)){
        throw new Error("Input Must be a array ");
    }

    if (!arr.every(item => typeof item === "number")) {
        throw new Error("Array must contain only numbers");
    }

    return arr.filter(even => even % 2 == 0);
}

try{

    const arr = [10, 4, 3, 6, 9, 8];
    const evenArray = filterEvenNumber(arr);
    console.log("Even Numbers" + evenArray);
    console.log(typeof evenArray);

} catch(error){
    console.error(error.message);
}