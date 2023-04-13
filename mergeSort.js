function mergeSort(arr) {
  function merge(arr1, arr2) {
    let ans = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        ans.push(arr1[i++]);
      } else {
        ans.push(arr2[j++]);
      }
    }

    while (i < arr1.length) {
      ans.push(arr1[i++]);
    }
    while (j < arr2.length) {
      ans.push(arr2[j++]);
    }
    return ans;
  }
  if (arr.length == 1) {
    return arr;
  }
  let mid;
  if (arr.length % 2 == 0) {
    mid = arr.length / 2;
  } else {
    mid = (arr.length + 1) / 2;
  }
  let leftSide = arr.slice(0, mid);
  leftSide = mergeSort(leftSide);
  let rightSide = arr.slice(mid, arr.length);
  rightSide = mergeSort(rightSide);
  let merged = merge(leftSide, rightSide);
  return merged;
}
