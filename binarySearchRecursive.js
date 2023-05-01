/* 
    ! problem statement: Given a sorted array of 'n' elements  and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found
*/

/* Pseudocode
 * 1. if the array is empty return -1 as the element could not be found
 * 2. if the array has elements, find the middle element of the array. If the middle element is equal to the target return middle index
 * 3. if the target is greater than the middle element, binary search right half of the array
 * 4. if the target is less than the middle element, binary search left half of the array
 */

function binarySearchRecursive(arr, t) {
    return search(arr, 0, arr.length - 1, t);
}

function search(arr, leftIndex, rightIndex, t) {
    if (leftIndex > rightIndex) return -1;
    const midIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[midIndex] === t) return midIndex;
    if (arr[midIndex] > t) return search(arr, leftIndex, midIndex - 1, t);
    else if (arr[midIndex] < t) return search(arr, midIndex + 1, rightIndex, t);
}
const arr = [-5, 2, 4, 6, 10, 45, 67, 78];

console.log(binarySearchRecursive(arr, 10)); //4
console.log(binarySearchRecursive(arr, 6)); //3
console.log(binarySearchRecursive(arr, 20)); //-1

//? Big - O: O(logn)
