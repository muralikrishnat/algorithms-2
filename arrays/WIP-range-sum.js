/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
    this.sumMap = new Map();
    this.uIndexes = new Map();
    this.nums = nums;
  };
  
  /** 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  NumArray.prototype.update = function(index, val) {
    for(let [k,v] of this.sumMap) {
      if(index >= k) {
        for(let [k1, v2] of v) {
          if(index <= k1) {
            v2.sum -= this.nums[index];
            v2.sum += val;
          }
        }
      }
    }
    this.nums[index] = val;
  };
  
  /** 
   * @param {number} left 
   * @param {number} right
   * @return {number}
   */
  NumArray.prototype.sumRange = function(left, right) {
    // console.log('\t', 'range: ', left, right, 'diff:', right - left);
    let sum = 0, s = left, e = right, diff = right - left;
    if (this.sumMap.has(left)) {
      let ends = this.sumMap.get(left);
      if(ends.has(right)) {
        return ends.get(right).sum;
      }
    }
    let whileLen = 0;
    while(s <= e) {
      sum += this.nums[s];
      s++;
      whileLen++;
    }
    // console.log('while: ', whileLen);
    let start = new Map(), end = new Map();
    if(this.sumMap.has(left)) {
      start = this.sumMap.get(left);
    }
    start.set(right, { sum, left, right });
    this.sumMap.set(left, start);
    return sum;
  };
  
  /** 
   * Your NumArray object will be instantiated and called as such:
   * var obj = new NumArray(nums)
   * obj.update(index,val)
   * var param_2 = obj.sumRange(left,right)
   */
  
  var input = [];
  for(let i = 0; i < 100; i++) {
    input.push(i+1);
  }
  var numArray = new NumArray(input);
  console.log('res', numArray.sumRange(0, 4), '\n==========\n');
  // console.log('res', numArray.sumRange(0, 20), '\n==========\n');
  console.log(numArray.update(1, 3));
  // console.log('res', numArray.sumRange(0, 29), '\n==========\n');
  console.log('res', numArray.sumRange(0, 4), '\n==========\n');
  
  /*
    1+2+3+4+5
    0 30 496
    0 20 231
    0 29 465
  */