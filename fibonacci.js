
//! Problem statement:  Give a number 'n', find the first n elements of the fibonacci sequence

//* f(7) = 0 1 1 2 3 5 8

function fibonacci(n) {
    const arr = [0, 1];
    let i = 2;
    while (i < n) {
        arr[i] = arr[i - 2] + arr[i - 1];
        i++;
    }
    return arr;
}

console.log(fibonacci(2));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(7));

//? BIG O: O(n)

