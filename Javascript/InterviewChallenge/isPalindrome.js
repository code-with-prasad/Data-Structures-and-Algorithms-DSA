
//3.Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(str){

    if(!str || typeof str !== "string"){
        throw new Error("Input must be a non-empty string");
    }

    // Normalize the string : remove non-alphanumeric characters and convert to lowercase 
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    //Check if the cleanded string is equal to its reverse 
    return cleanedStr === cleanedStr.split("").reverse().join("");

}

try{

    const input = "ram";
    const checkPalindrome = isPalindrome(input);

    if(checkPalindrome){
        console.log(`${input} is a palindrome `);
    } else{
        console.log(`${input} is not a palindrome `);
    }

}catch(error){
    console.error("Error:", error.message)
}