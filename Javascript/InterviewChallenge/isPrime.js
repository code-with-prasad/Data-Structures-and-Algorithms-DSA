

// 7. Write a JavaScript function to check if a given number is prime. 

// a number that can be divided exactly only by itself and 1, for example 7, 17 and 41

function isPrime(num) {

    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) return false;

    }

    return true;

}

console.log(isPrime(4))