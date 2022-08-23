function segregateEvenOdd(arr) {
    // [...even, ...odd]
    let res = 0,
        left = 0,
        right = arr.length - 1;
    // two-pointer approach
    while (left < right) {
        if (arr[left] % 2 != 0) {
            while (right > left && arr[right] % 2 != 0) {
                // Find the first occurrence on the righthand side that can be swapped
                right--;
            }

            if (right > left) {
                // if we're already in the midpoint and the left pointer is odd then there is no swap
                res++;
                // handled this rightmost occurrence that was even => adjust to account for this
                right--;
            }
        }

        left++;
    }

    return res;
}

function segregateOddEven(arr) {
    // [...odd, ...even]
    let res = 0,
        left = 0,
        right = arr.length - 1;
    // two-pointer approach
    while (left < right) {
        if (arr[left] % 2 == 0) {
            while (right > left && arr[right] % 2 == 0) {
                // Find the first occurrence on the righthand side that can be swapped
                right--;
            }

            if (right > left) {
                // if we're already in the midpoint and the left pointer is odd then there is no swap
                res++;
                // handled this rightmost occurrence that was even => adjust to account for this
                right--;
            }
        }

        left++;
    }

    return res;
}
// var arr = [12, 34, 45, 9, 8, 90, 3];
var arr = [3, 7, 4, 6, 7, 8, 3];
let result = segregateEvenOdd3(arr);
let result1 = segregateEvenOdd4(arr);
console.log(`[...even, ...odd]=${result}, [...odd, ...even]=${result1}`)