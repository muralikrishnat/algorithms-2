var coinChange = function(coins, amount) {
    let coinMap = new Map(), amountHash = {};
    amountHash[0] = 0;
    for(let index = 1; index <= amount; index++) {
      let minCoins = Infinity;
      for(let i = 0; i < coins.length; i++){
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
    for(let value of coinMap.values()){
      // console.log(value);
    }
    console.log(amountHash[amount]);
  };
  
  
  console.log(coinChange([1,2,5,12],11));