console.clear();
function greedyJumpGame(numbers) {
  // The "good" cell is a cell from which we may jump to the last cell of the numbers array.

  // The last cell in numbers array is for sure the "good" one since it is our goal to reach.
  let leftGoodPosition = numbers.length - 1;
  console.log('leftGoodPosition', leftGoodPosition);

  // Go through all numbers from right to left.
  for (let numberIndex = numbers.length - 2; numberIndex >= 0; numberIndex -= 1) {
    // If we can reach the "good" cell from the current one then for sure the current
    // one is also "good". Since after all we'll be able to reach the end of the array
    // from it.
    console.log('numberIndex', numberIndex, numbers[numberIndex]);
    const maxCurrentJumpLength = numberIndex + numbers[numberIndex];
    if (maxCurrentJumpLength >= leftGoodPosition) {
      leftGoodPosition = numberIndex;
    }
  }

  // If the most left "good" position is the zero's one then we may say that it IS
  // possible jump to the end of the array from the first cell;
  return leftGoodPosition === 0;
}

greedyJumpGame([2,3,1,1,4]);
greedyJumpGame([3,2,1,0,4]);