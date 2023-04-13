function fibs(n) {
    if (n === 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      var fibsArr = fibs(n - 1);
      fibsArr.push(fibsArr[fibsArr.length - 1] + fibsArr[fibsArr.length - 2]);
      return fibsArr;
    }
  }
  