function quickSort(arr) {
    console.count('quick sortedArr');
    if (arr.length <= 1) {
        return arr;
    }
    const left = [];
    const right = [];
    const sortedArr = [];
    const pivot = arr.pop();
    const len = arr.length;
    for (var i = 0; i < len; i++) {
        console.count('quick sortedArr');
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return sortedArr.concat(quickSort(left), pivot, quickSort(right));
}


let arr = [4, 2, 9, 3, 8, 5, 1, 10, 0];
let quickSortedArr = quickSort(arr);
console.log('quick sortedArr', quickSortedArr)
let arr2 = [...arr];
arr2.sort((a, b) => { console.count('buble sort'); return a-b;});


function quickSort2(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right);
        }
    }
    return items;
}
// first call to quick sort
var items = [...arr];
var result = quickSort2(items, 0, items.length - 1);