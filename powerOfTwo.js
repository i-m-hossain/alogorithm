//! problem statement:Given a positive integer 'n', determine if the number is a power of two or not

function isPowerOfTwo(number) {
    if (number < 1) return false;
    while (number !== 1) {
        if (number % 2 === 1) {
            return false;
        }
        number = number / 2;
    }

    return true;
}

console.log(isPowerOfTwo(32));
console.log(isPowerOfTwo(30));

//? BIG O notation: O(logn)
