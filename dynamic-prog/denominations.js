function canGetExactChange(targetMoney, denominations) {
    // Write your code here
    let que = [], isValid = false;
    let denoms = [], moneyMap = {};
    for(let i = 0; i < denominations.length; i++) {
      let denom = denominations[i];
      if(denom <= targetMoney) {
        moneyMap[denom] = 1;
        denoms.push({
          denom,
          pendingAmount: targetMoney % denom
        });
      }
    }
    for(let i =0; i < denoms.length; i++) {
      if (moneyMap[denoms[i].pendingAmount]){
        isValid = true;
        break;
      }
    }
    return isValid;
  }
  
  console.log(canGetExactChange(94, [5, 10, 25, 100, 200]));
  // console.log(canGetExactChange(75, [4, 17, 29]));