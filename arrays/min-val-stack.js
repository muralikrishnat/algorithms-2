var minStack = (function () {
    var stack = [], min = { val: Infinity, index: null };
    var minValStack = [];
    return {
        push: function (num) {
            if (num < min.val) {
                minValStack.push({ val: min.val, index: min.index});
                min.val = num;
                min.index = stack.length;
            }
            stack.push(num);
            return min;
        },
        pop: function () {
            if (stack.length - 1 === min.index) {
                min = minValStack.pop();
            }
            return stack.pop();
        },
        getMin: function () {
            return min;
        }
    };
  })();
  
  console.log(minStack.push(3));
  console.log(minStack.push(10));
  console.log(minStack.push(4));
  console.log(minStack.push(1));
  console.log(minStack.pop());
  console.log(minStack.push(11));
  