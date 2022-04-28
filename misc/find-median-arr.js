console.clear();
function getMedian(index, arr) {
  if(index === 0) {
    return arr[index];
  }
  if(index === 1) {
    return (arr[0] + arr[1]) / 2;
  }
  let newArr = [...arr.slice(0, index + 1)];
  console.log('newArr', newArr);
  newArr.sort((a,b)=>a-b);
  console.log('newArr', newArr);
  let middle = Math.floor(newArr.length / 2);
  if (index % 2 === 1) {
    console.log('newArr', newArr[middle]);
    return newArr[middle];
  }
  console.log('middle:', middle);
  return (newArr[middle] + newArr[middle - 1]) / 2;
}

function findMedian(arr) {
  // Write your code here
  return arr.map((num, index) => {
     return getMedian(index, arr);
  });
}


findMedian([5, 15, 1, 3]);