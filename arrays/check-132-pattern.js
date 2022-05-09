var check132Patern = (arr) => {
    let min = Infinity, max = -Infinity, len = arr.length;
    let res = false;
    for(let i = 0; i < len; i++) {
      let num = arr[i];
      console.log('num', num);
      if (min !== Infinity && max !== -Infinity) {
        if (!(min < num && max < num)) {
          res = true;
          break;
        }
      }
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    }
    return res;
  }
  console.log(check132Patern([1, 2, 3, 4]));
  console.log(check132Patern([1, 2, 4, 3, 5, 6, 7, 8, 9]));