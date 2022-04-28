console.clear();
function minimumBribe(arr) {
    let len = arr.length;
    for(let i = 0; i < len; i++) {
        let num = arr[i];
        if (i > 0) {
            let lastNum = arr[i - 1];
            let prevDif = num - lastNum;
            if (prevDif !== 1) {
                console.log(num - lastNum);  
            }
        }
    }
}

// minimumBribe([1, 2, 3, 4, 5]);

minimumBribe([1, 2, 3, 5, 4, 6]);