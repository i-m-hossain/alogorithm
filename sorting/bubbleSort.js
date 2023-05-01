//! Problem statement: Given an Array of integers(positive, negative and 0 whole number), sort the array using bubble sort

//* const arr=[-6, 20, 8, -2,4]
//* bubbleSort(arr) => should return [-6, -2, 4, 8, 20]

/*

    * [-6 20 8 -2 4] 
    * [-6 20 8 -2 4] --> [-6 8 20 -2 4] swap since 20>8 
    * [-6 8 20 -2 4] --> [-6 8 -2 20 4] swap since 20>-2
    * [-6 8 -2 20 4] --> [-6 8 -2 4 20] swap since 20>4
    * End of array. Elements swapped? yes? repeat the comparison

    * [-6 8 -2 4 20] 
    * [-6 8 -2 4 20] --> [-6 -2 8 4 20] swap since 8>-2 
    * [-6 -2 8 4 20]--> [-6 -2 4 8 20] swap since 8>4
    * End of array. Elements swapped? yes? repeat the comparison
    
    * [-6 -2 4 8 20] 
    * [-6 -2 4 8 20] --> no swap
    * [-6 -2 4 8 20] --> no swap
    * [-6 -2 4 8 20] --> no swap
    *  * End of array. Elements swapped? No. Array is sorted
*/


function bubbleSort(arr) {
    let swapped =true;
    while (swapped) {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                swapped = true;
            }
        }
    }
    return arr;
}
const arr = [-6, 20, 8, -2, 4];
console.log(bubbleSort(arr, ));

//? Big- O: O(n^2)
