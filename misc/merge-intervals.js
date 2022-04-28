var mergeIntervals = (arr) => {
    let len = arr.length;
    if (len === 1) return arr;
    let res = [];
    let left = 0;
    arr.sort((a, b) => a.s - b.s);
    while (left < len - 1) {
        let cur = arr[left];
        let next = arr[left + 1];
        if ((cur.s > next.s && cur.s < next.e) ||
            (cur.e > next.s && cur.e < next.e)) {
            console.log('overlap');
        } else {
            
        }
        left++;
    }
    return res;
}

let intervals = [];
intervals.push({
    s: 0,
    e: 2
});
intervals.push({
    s: 3,
    e: 5
});
intervals.push({
    s: 10,
    e: 12
});
console.log(mergeIntervals(intervals));