console.clear();
var arr = [1, 2, 3];

let pArr = new Array(arr.length).fill(1);

let sArr = new Array(arr.length).fill(1);
let end = arr.length - 1;
let resArr = new Array(arr.length).fill(1);
for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
        pArr[i] = pArr[i -1] * arr[i-1];
    }
    if (end === arr.length - 1) {
        sArr[end] = 1;    
    } else {
        sArr[end] = sArr[end + 1] * arr[end + 1];
    }
    if (i >= end) {
        let num = 1 * pArr[i] * sArr[i];
        let num2 = 1 * pArr[end] * sArr[end];    
        if (i === end){
            resArr[i] = num;
        } else {
            resArr[end] = num2;
            resArr[i] = num;
        }
    }
    
    end--;
}
console.log(pArr, sArr);
console.log('resArr', resArr);