/*
! problem statement: Given a sorted array of 'n' elements  and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found
*/

/* Pseudocode
* 1. if the array is empty return -1 as the element could not be found
* 2. if the array has elements, find the middle element of the array. If the middle element is equal to the target return middle index
* 3. if the target is greater than the middle element, binary search right half of the array
* 4. if the target is less than the middle element, binary search left half of the array
*/

function binarySearch(arr, t) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[middleIndex] === t) return middleIndex;
        if (arr[middleIndex] < t) leftIndex = middleIndex + 1;
        else if (arr[middleIndex] > t) rightIndex = middleIndex - 1;
    }
    return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10, 45, 67, 78, 223], 10)); //4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); //3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); //-1

//? BIG O notation: O(logn) 
