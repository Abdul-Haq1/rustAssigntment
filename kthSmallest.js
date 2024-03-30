function kthSmallest(arr, k) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
    
    // Return the kth element (index k - 1, since arrays are zero-indexed)
    return arr[k - 1];
}
