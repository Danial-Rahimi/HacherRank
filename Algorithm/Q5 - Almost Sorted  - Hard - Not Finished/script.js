function sortBySwap(arr) {
  let index = 1;
  let swapCounter = 0;
  let arrLength = arr.length;
  let result;
  while (index < arrLength) {
    if (arr[index] < arr[index - 1] && !swapCounter) {
      return "no";
    } else if (arr[index] < arr[index - 1]) {
      result = [];
    }
    index++;
  }
}

let myArr = [1, 5, 4, 3, 2, 6];
