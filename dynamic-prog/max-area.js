var getArea = function(arr, i, j) {
    return (Math.min(arr[i], arr[j]) * (j - i));
  }
  var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let area = 0;
    while(left < right) {
      area = Math.max(area, getArea(height, left, right));
      if (height[left] < height[right]) {
        left++;
      } else {
        right--
      }
    }
    return area;
  };
  
  // getArea([1,8,6,2,5,4,8,3,7], 1, 8);
  
  console.log(maxArea([1,8,6,2,5,4,8,3,7]));