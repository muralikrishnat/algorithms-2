var canCompleteCircuit = function(gas, cost) {
    let res = null, pIndex = 0, rSum = 0, iGas = 0;
    for(let i = 0; i < gas.length; i++) {
      iGas = gas[i];
      rSum = rSum + (iGas - cost[i]);
      if(rSum < 0) {
        rSum = 0;
        pIndex = i + 1;
      }
    }
    if(rSum >= 0) {
      return pIndex;
    }
    return -1;
  };
  
  console.log(canCompleteCircuit([1,2,3,4,5],[3,4,5,1,2]));
  console.log(canCompleteCircuit([5,1,2,3,4],[4,4,1,5,1]));
  // console.log(4-1+4-5+4-1+1-2+5-3);
  /*
  [5,1,2,3,4]
  [4,4,1,5,1]
    5-4=  1
    1-4= -3
    2-1=  1
    3-5= -3
    4-1=  3
  
    1-3 = -2
    2-4 = -2
    3-5 = -2
    4-1 = 3
    5-2 = 3
    
    
  */