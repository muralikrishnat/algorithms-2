console.clear();
var s1 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz";
var s2 = 'abcdefghijklmnopqrstuvwxywz';
var s = 'abcabcbb';

var left = 0;
var right = 0;

var res = 0;

var len = s.length;

var charset = new Set();

while(right < len) {
  while(charset.has(s[right])){
    charset.delete(s[left]);
    left += 1;
  }
  charset.add(s[right]);
  res = Math.max(res, right - left + 1);
  right += 1;
}

console.log(charset);


console.clear();
// var arr = [1, 2];

// let arr = [10, 22, 9, 33, 21, 50, 41, 60, 80];
// let exp = [10, 22, 33, 21, 50, 60, 80];
let arr = [10, 23, 3, 40];
// let Ln = arr.length-1;
// let LIS = (new Array(arr.length)).fill(1);

// for(let i =1; i<=Ln; i++){
//     console.group(arr[i]);
//     for(let j=0; j <= i; j++){
//         console.group(arr[j]);
//         console.log(arr[j], arr[i], arr[j] < arr[i], LIS[i], LIS[j] + 1);
//         if(arr[j] < arr[i] && LIS[i] < LIS[j]+1 ){
//             LIS[i] = LIS[j]+1;
//         }
//         console.groupEnd(arr[j]);
//     }
//     console.groupEnd(arr[i]);
// }
// console.log(Math.max(...LIS));


var map = (new Array(arr.length)).fill(1);
for(let i = 1; i < arr.length; i++) {
    console.group(i + ':' + arr[i]);
    let count = 0;
    for (let j = 0; j < i; j++) {
        console.log(arr[j], arr[i], arr[j] < arr[i]);
        if (arr[j] < arr[i]) {
            console.log('\t', arr[j], map[j]);
            if (map[i] < map[j] + 1) {
                map[i] = map[j] + 1;
            }
            count += 1;
        }
    }
    console.log('\t', count);
    // map[i] = count;
    console.groupEnd(i + ':' + arr[i]);
    
}
console.log(map);