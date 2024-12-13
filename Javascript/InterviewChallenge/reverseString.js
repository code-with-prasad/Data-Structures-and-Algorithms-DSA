
// 4. Write a JavaScript program to reverse a given string. 

function reverseString(str){

     // Ensure the input is a valid non-empty string
    if(typeof str !== "string" || str.trim() === ""){
        throw new Error ("Input must be a non-empty string");
    }
   
   return str.split("").reverse().join("");
}

try{

    const input = "Prasad";
    const reverse = reverseString(input);
    console.log(reverse);

} catch(error){
    console.error("Error : ", error.message);
}