
//! PROBLEM: Given a number 'n', find the nth element of the fibonacci sequence
//* f(7) = 0 1 1 2 3 5 8 13

function fibonacciWithRecursion(n) {
    if (n < 2) {
        return n;
    }
    
    return fibonacciWithRecursion(n - 1) + fibonacciWithRecursion(n - 2);
}

console.log("recursive fibonacci:", fibonacciWithRecursion(7));

//? BIG O --> 2^n
