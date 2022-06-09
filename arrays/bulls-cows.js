/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
 var getHint = function(secret, guess) {
    let b = 0, cows = 0, len = secret.length;
   let sMap = new Map();
   for(let i =0; i < len; i++) {
     let s = secret[i];
     let g = guess[i];
     if(s !== g) {
       let c = 0;
       if(sMap.has(s)) {
         c = sMap.get(s);
       }
       c += 1;
       sMap.set(s, c);
     }
   }
   for(let i =0; i < len; i++) {
     let s = secret[i];
     let g = guess[i];
     if(s === g) {
       b += 1;
     } else {
       if(sMap.has(g)) {
         let c = sMap.get(g);
         if(c > 0) {
           sMap.set(g, c - 1);
           cows += 1;
         } else {
         }
       }
     }
   }
   return b + 'A' + cows + 'B';
 };