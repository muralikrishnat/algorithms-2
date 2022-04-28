console.clear();
var myPow = function(x, n) {
    let powCache = {};
    function pow(x, n) {
        if (powCache[n]){
            return powCache[n];
        }
        if (n === 1) return x;
        let num = Math.floor(n /2);
        if (n % 2 === 0) {
            powCache[n] = pow(x, num) * pow(x, num);
            return powCache[n];
        } else {
            powCache[n] = x * pow(x, num) * pow(x, num);
            return powCache[n];
        }
    }
    let res = pow(x, n < 0 ? -n : n);
    return n < 0 ? 1 / res : res;
};


myPow(2, 4)

