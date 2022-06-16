/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
 var PeekingIterator = function(iterator) {
    this.iter = iterator;
    this.n = this.iter.next();
  };
  
  /**
   * @return {number}
   */
  PeekingIterator.prototype.peek = function() {
    return this.n;
  };
  
  /**
   * @return {number}
   */
  PeekingIterator.prototype.next = function() {
    let n1 = this.n;
    this.n = this.iter.next();
    return n1;
  };
  
  /**
   * @return {boolean}
   */
  PeekingIterator.prototype.hasNext = function() {
    return this.n !== undefined;
  };
  
  /** 
   * Your PeekingIterator object will be instantiated and called as such:
   * var obj = new PeekingIterator(arr)
   * var param_1 = obj.peek()
   * var param_2 = obj.next()
   * var param_3 = obj.hasNext()
   */
  function Iterator(arr) {
    let index = 0, len = arr.length;
    this.next = function() {
      return arr[index++];
    }; 
    this.hasNext = function() {
      return index < len;
    };
  };
  var obj = new PeekingIterator(new Iterator([1, 2, 3]));
  console.log(obj.next());
  obj.peek();
  console.log(obj.next());
  console.log(obj.next());
  console.log(obj.hasNext());