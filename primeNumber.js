//! Problem statement: Give a natural number 'n', determine if the number is prime or not

//* DEFINITION: A prime number is a natural number greater than 1 and that is not a product of two smaller natural numbers

/* Example
 ? isPrime(5) = true (1*5 or 5*1)
 ? isPrime(4) = false (1*4 or 4 *1 or 2*2)
*/

function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number/2); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

console.log(isPrime(10));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(23));
console.log(isPrime(33));
console.log(isPrime(97));
console.log(isPrime(141));

//? Big o notation: O(logn)
