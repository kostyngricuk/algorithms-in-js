// arr - should be sorted array
const binarySearch = (arr, target) => {
  let minIndex = 0;
  let maxIndex = arr.length - 1;

  while (minIndex <= maxIndex) {
    const midIndex = Math.floor((minIndex + maxIndex) / 2);
    if (arr[midIndex] === target) {
      return midIndex;
    }

    if (arr[midIndex] < target) {
      minIndex = midIndex + 1;
    }
    if (arr[midIndex] > target) {
      maxIndex = midIndex - 1;
    }
  }

  return -1;
}

export default binarySearch;