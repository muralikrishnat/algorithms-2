var findKthLargest = function(nums, k) {
    let len = nums.length;
    var insert = (arr, num, k) => {
      var len = arr.length;
      if(len === 0) {
        arr.push(num);
        len++;
        return arr;
      }
      let max = arr[0], min = arr[len - 1];
      if(len === 1) {
        if(k === 1) {
          if(num > max) {
            arr[0] = num;
          }
        } else {
          if(num >= max) {
            arr.unshift(num);
          } else {
            arr.push(num);
          }
        }
        return arr;
      }
      if(num === min || num < min) {
        if(k === 2) {
          return arr;
        }
        arr.push(num);
        return arr;
      }
      if(num == max || num > max) {
        if(k > 2) {
          arr.unshift(num);
          return arr.slice(0, k);
        }
        if(k === 2) {
          return [num, max];
        }
        arr.unshift(num);
        return arr;
      }
      
      let mi = Math.floor(len / 2);
      let m1 = arr[mi];
      if(m1 === num) {
        arr.splice(mi,0,num);
        return arr;
      }
      if(num < m1 && num > min) {
        let rp = insert(arr.slice(mi + 1), num, k - (mi + 1));
        return [...arr.slice(0, mi), m1, ...rp];
      } else {
        let lp = insert(arr.slice(0, mi), num);
        return [...lp, ...arr.slice(mi)];
      }
      return arr;
    }
    let res = [];
    for(let i = 0; i < len; i++) {
      let num = nums[i];
      res = insert(res, num, k);
    }
    return res[k-1];
  };
  
  findKthLargest([3,2,1,5,6,4], 1);
  // findKthLargest([3,2,3,1,2,4,5,5,6], 4);
  
  /*
  
  */
  var insert = (arr, num, k) => {
    var len = arr.length;
    if(len === 0) {
      arr.push(num);
      len++;
      return arr;
    }
    let max = arr[0], min = arr[len - 1];
    if(len === 1) {
      if(k === 1) {
        if(num > max) {
          arr[0] = num;
        }
      } else {
        if(num >= max) {
          arr.unshift(num);
        } else {
          arr.push(num);
        }
      }
      return arr;
    }
    if(num === min || num < min) {
      if(k === 2) {
        return arr;
      }
      arr.push(num);
      return arr;
    }
    if(num == max || num > max) {
      if(k > 2) {
        arr.unshift(num);
        return arr.slice(0, k);
      }
      if(k === 2) {
        return [num, max];
      }
      arr.unshift(num);
      return arr;
    }
    
    let mi = Math.floor(len / 2);
    let m1 = arr[mi];
    if(m1 === num) {
      arr.splice(mi,0,num);
      return arr;
    }
    if(num < m1 && num > min) {
      let rp = insert(arr.slice(mi + 1), num, k - (mi + 1));
      return [...arr.slice(0, mi), m1, ...rp];
    } else {
      let lp = insert(arr.slice(0, mi), num);
      return [...lp, ...arr.slice(mi)];
    }
    return arr;
  }
  var input = [10, 8, 1];
  // input = insert(input, 14, 3);
  // console.log(input);
  
  // input = insert(input, 8);
  // console.log(input);
  
  // input = insert(input, 10);
  // console.log(input);
  
  // input = insert(input, 1);
  // console.log(input);
  
  // input = insert(input, 3);
  // console.log(input);
  
  // input = insert(input, 7);
  // console.log(input);
  // input = insert(input, 8);
  // console.log(input);
  // input = insert(input, -1);
  // console.log(input);
  // input = insert(input, 2);
  // console.log(input);