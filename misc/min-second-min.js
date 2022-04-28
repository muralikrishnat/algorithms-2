var getTwoSmall = (arr, k) => {
    let min = Infinity, smin = Infinity;
    let foundMin = false;
    for(let i = 0; i < arr.length; i++) {
      let num = arr[i];
      if (num < k) {
        foundMin = true;
        if (num < min) {
          smin = min;
          min = num;
        } else {
          if (num !== min && num < smin) {
            smin = num;
          }
        }
      }
    }
    return [foundMin, min, smin];
};


let [foundMin, min, smin ] = getTwoSmall([13 ,47 ,74 ,12 ,89 ,74 ,18,38], 90);
console.log(min , smin ,(min * 1) + (smin * 2));