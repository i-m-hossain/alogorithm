//! Problem statement: Given an Array of integers(positive, negative and 0 whole number), sort the array using bubble sort

//* const arr=[-6, 20, 8, -2,4]
//* insertionSort(arr) => should return [-6, -2, 4, 8, 20]

/* Algorithm
 * Virtually split the array into a sorted and an unsorted part
 * Assume that the first element is already sorted and remaining elements are unsorted
 * select an unsorted element and compare with all elements in the sorted part
 * if the elements in the sorted parent is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right.
 * insert the selected element at the right index
 */

/* NTI(Number to insert) SE(Sorted element)
    [-6 20 8 -2 4]  NTI = 20    -6 > 20 ? No.    place 20 to the right of -6
    [-6 20 8 -2 4]  NTI = 8     20 > 8 ? Yes.    shift 20 to the right
    [-6 20 20 -2 4] NTI = 8     -6 > 8 ? No.     place 8 to the right of -6
    [-6 8 20 -2 4]  NTI = -2    20 > -2 ? Yes.   shift 20 to the right
    [-6 8 20 20 4]  NTI = -2    8  > -2 ? yes    shift 8 to the right
    [-6 8 8 20 4]   NTI = -2    -6 > -2 ? No     place -2 to the right of -6
    [-6 -2 8 20 4]  NTI = 4     20 > 4 ? Yes     shift 20 to the right
    [-6 -2 8 20 20] NTI = 4     8  > 4 ? Yes     shift 8 to the right
    [-6 -2 8 8 20]  NTI = 4    -2  > 4 ? No      place 4 to the right of -2
    [-6 -2 4 8 20]  Reached the end of the array, insertion sort finished         
*/ 

function insertionSort(arr) {
    for (let i = 1; i <= arr.length - 1; i++) {
        const NTI = arr[i]; //NTI --> Number to insert
        // for (let j = i - 1; j >= 0; j--) {
        //     if (arr[j] > NTI) {
        //         arr[j + 1] = arr[j];
        //     } else {
        //         arr[j + 1] = NTI;
        //         break;
        //     }
        // }

        let j = i - 1;
        while (j >= 0 && arr[j] > NTI) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = NTI;
    }
    return arr;
}

console.log(insertionSort([-6, 20, 8, -2, 4]));


//? Big O: O(n^2)