console.clear();
var maxProfit = function(prices) {
  let postivedays = [], 
    lastTrend = null,
    lastPositive = null, lastIndex = null,
    lastPrice = null;
  for(let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (lastPrice === null) {
      lastPrice = price;
    } else {
      if (price >= lastPrice) {
        lastTrend = true;
        let lastPosBuy = lastPositive ? lastPositive.buy : lastPrice;
        lastPositive = {
          buy: lastPosBuy,
          sell: price,
          days: ((lastPositive || {}).days || 0) + 1
        };
        if (i === prices.length - 1) {
          postivedays.push(lastPositive);
        }
      } else {
        if (lastTrend) {
          postivedays.push(lastPositive);
          lastPositive = null;
        }
        lastTrend = false;
      }
      lastPrice = price;
      lastIndex = i;
    }
  }
  let maxProfit = 0;
  postivedays.forEach(day => {
    maxProfit += day.sell - day.buy;
  });
  return maxProfit;
};

console.log(maxProfit([2,1,2,1,0,1,2]));
// console.log(maxProfit([1, 2, 3, 4, 5]));