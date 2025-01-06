

function generateFibonacci(terms){

    if(terms <= 0){
        return [];
    }

    if(terms === 1){
        return [0];
    }

    const fibonacciSequence = [0,1];
    for(let i = 2; i<terms; i++){
        const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextTerm);
    }

    return fibonacciSequence;

}

const terms = 5;
console.log(generateFibonacci(terms));