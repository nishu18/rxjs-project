const arr = [2, 2, 2, 2, 3, 3, 444, 5, 5, 6, 8];

/**
 *
 * @param {array} arr
 */
function duplicateFreeArr(arr) {
  let uniqueArr = new Array();

  for (let items of arr) {
    if (!uniqueArr.includes(items)) {
      uniqueArr.push(items);
    }
  }

  return uniqueArr;
}

console.log(duplicateFreeArr(arr));
