//! problem statement: Given an array of 'n' elements and a target element 't', find the index of t in the array. Return -1 if the target elements is not found.

function linearSearch(array, t) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === t) { 
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([-5,2,10,4,6], 10));
console.log(linearSearch([-5,2,10,4,6], 6));
console.log(linearSearch([-5,2,10,4,6], 20));


//? Big O --> O(n)
