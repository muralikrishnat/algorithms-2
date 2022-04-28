function aboveAverageSubArray(arr) {
    let len = arr.length;
    let lenArr = len;
    let res = [];
    while(lenArr >= 1) {
      for(let i = 0;i < lenArr; i++) {
        let subArr = arr.slice(i, lenArr);
        let restLeft = arr.slice(0, i);
        let restRight = arr.slice(lenArr);
        let restArr = [...restLeft, ...restRight];
        let subAvg = subArr.reduce((a, b) => a +b, 0) / subArr.length;
        let restAvg = restArr.reduce((a, b) => a +b, 0) / restArr.length;
        if (subAvg > restAvg || restArr.length === 0) {
          let startIndex = i + 1;
          let endIndex = startIndex + subArr.length - 1;
          res.push([startIndex, endIndex]);
        }
      }
      lenArr--;
    }
    return res;
  }
  
  console.log(aboveAverageSubArray([3, 4, 2]));