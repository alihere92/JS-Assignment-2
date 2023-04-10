function searchArray(arr, value) {
    if (arr.length === 0) {
      return false; // base case: array is empty
    } else if (arr[0] === value) {
      return true; // base case: value found
    } else {
      return searchArray(arr.slice(1), value); // recursive case: search rest of array
    }
  }
  const arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3));  // Output: true
  console.log(searchArray(arr, 6));  // Output: false
    