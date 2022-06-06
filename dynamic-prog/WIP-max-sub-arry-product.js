var maxProduct = function(nums) {
    let len = nums.length;
    let p1 = 0, p2 = 0;
    let tProd = null, max = -Infinity;
    while(p1 < len && p2 < len) {
      let num = nums[p2];
      if (!tProd) {
        tProd = num;
      } else {
        if(tProd * num < tProd) {
          p1 = p2;
          tProd = num;
        } else {
          tProd = tProd * num;
        }
      }
      max = Math.max(max, tProd);
      p2++;
    }
    return max;
  };
  
  var maxProduct2 = (nums) => {
    let maximumProduct=nums[0], Max=[nums[0]], Min=[nums[0]];
     for(let i=1;i<nums.length;i++){
         Max[i]=Math.max(nums[i], nums[i]*Max[i-1], nums[i]*Min[i-1]);
         Min[i]=Math.min(nums[i], nums[i]*Max[i-1], nums[i]*Min[i-1]);
         maximumProduct=Math.max(Max[i], maximumProduct);
     }
     return maximumProduct;
  }
  
  // maxProduct([2,3,-2,4]);
  maxProduct([-2,0,-1]);
  
  /*
  [2,3,-2,4]
  
  */