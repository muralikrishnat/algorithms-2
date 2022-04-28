console.clear();
var firstUniqChar = function(s) {
    let map = new Map();
    let res = -1;
    let resArr = [];
    for(let i = 0; i < s.length; i++){
        let charS = s[i];
        if (!map.has(charS)) {
            map.set(charS, { index: i, count: 1 });
            resArr[i] = 1;
        } else {
            let mapVal = map.get(charS);
            mapVal.count += 1;
            map.set(charS, mapVal);
        }
    }
    for(let key of map.values()){
        console.log(key);
        if (key.count === 1) {
            res = key.index;
            break;
        }
    }
    return res;
};

// firstUniqChar("aadadaad");
// firstUniqChar("leetcode");
firstUniqChar("loveleetcode");