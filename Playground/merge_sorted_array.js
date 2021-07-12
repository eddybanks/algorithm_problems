function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  while (i < arr1.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    } else {
      mergedArray.push(arr1[i]);
      i++;
    }
  }

  while (arr2[j]) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}

a = [0, 3, 4, 31];
b = [4, 6, 30, 54, 56, 100];

let z = mergeSortedArrays(a, b);
console.log(z);
