//! problem statement:Given a positive integer 'n', determine if the number is a power of two or not

function isPowerOfTwoBitWise(n){ 
    if(n<1) return false;
    return (n & (n-1)) === 0
}

console.log(isPowerOfTwoBitWise(32));
console.log(isPowerOfTwoBitWise(30));

//? BIG O notation(O(1))
