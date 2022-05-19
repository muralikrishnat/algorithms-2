var say = (str) => {
    let pNum = "", count = 1, len = str.length;
    let res = "", resMap = [];
    for(let i = 0; i < len; i++) {
      let num = str[i];
      if (pNum === num) {
        count += 1;
        resMap[resMap.length - 1] = count + num;
      } else {
        pNum = num;
        count = 1;
        resMap.push(count + num);
      }
    }
    return resMap.join('');
  };
  var countAndSay = function(n) {
    if (n === 1) return "1";
    return say(countAndSay(n - 1));
  };
  
  
  console.log(countAndSay(6));