var longestConsecutive = function(nums) {
    let numMap = {}, len = nums.length;
    if(len ===0) return 0;
    let keyList = {};
    let counts = new Map(), max = 1;
    for(let i = 0; i < len; i++) {
      let num = nums[i];
      let n1 = 'N' + (num - 1), n2 = 'N' + (num + 1);
      let key = 'N' + (num);
      if (!numMap[key]) {
        if(numMap[n1] || numMap[n2]) {
          let key1 = numMap[n1];
          let key2 = numMap[n2]
          let count = 0, eKey = null;
          if (key1 && key2 && key1 !== key2) {
            let c1 = counts.get(key1);
            let c2 = counts.get(key2);
            count = c1 + c2;
            if(c1 < c2) {
              eKey = key2
              keyList[key1].forEach(x => {
                numMap[x] = eKey;
                keyList[eKey].push(x);
              });
            } else {
              eKey = key1
              keyList[key2].forEach(x => {
                numMap[x] = eKey;
                keyList[eKey].push(x);
              });
            }
          } else {
            eKey = key1 || key2;
            count = counts.get(eKey);
          }
          numMap[key] = eKey;
          keyList[eKey].push(key);
          counts.set(eKey, count + 1);
          max = Math.max(max, count + 1);
        } else {
          if (!keyList[key]) {
            keyList[key] = [];
          }
          keyList[key].push(key);
          numMap[key] = key;
          counts.set(key, 1);
        }
      }
    }
    return max;
  };
  // var input = [1, 4, 3, 2];
  var input = [0,3,7,2,5,8,4,6,0,1];
  
  console.log(longestConsecutive(input));
  
  /*
    0,0,1,2,3,4, 5, 6,7,8
  
  
  */