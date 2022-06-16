var coinChange = function (coins, amount) {
  let coinMap = new Map(), amountHash = {};
  amountHash[0] = 0;
  for (let index = 1; index <= amount; index++) {
    let minCoins = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let coin = coins[i];
      if (coin <= amount) {
        let noOfMaxCoins = Math.floor(amount / coin);
        let coinsTotal = noOfMaxCoins * coin;
        coinMap.set(coin, {
          coins: noOfMaxCoins,
          total: coinsTotal,
          pendingAmount: amount - coinsTotal,
          coinVal: coin
        });
      }
      if (coin <= index) {
        console.log('amount', index, coin, index - coin);
        minCoins = Math.min(minCoins, 1 + amountHash[index - coin])
      }
    }
    amountHash[index] = minCoins;
  }
  for (let value of coinMap.values()) {
    // console.log(value);
  }
  console.log(amountHash[amount]);
};


console.log(coinChange([1, 2, 5, 12], 11));


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
  if(amount === 0) return 0;
  let res = -1, len = coins.length;
  coins.sort((a,b) => b-a);
  console.log(coins);
  let pen = amount, count = 0;
  for(let i = 0; i < len; i++) {
    let coin = coins[i];
    if(pen >= coin) {
      count += Math.floor(pen / coin);
      pen = pen % coin;
    }
  }
  if(pen === 0) {
    return count;
  }

  let que = [];
  for(let i = 0; i < len; i++) {
    let coin = coins[i];
    if(amount >= coin) {
      que.push({
        pen: amount % coin,
        count: Math.floor(amount / coin)
      });
    }
  }
  while(que.length > 0) {
    let { pen, count } = que.shift();
    console.log(pen, count);
    for(let i = 0; i < len; i++) {
      let coin = coins[i];
      if(pen >= coin) {
        que.push({
          pen: pen % coin,
          count: count + (Math.floor(pen / coin))
        });
      }
    }
  }
};