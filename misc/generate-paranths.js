
var generateParenthesis = function(n) {

    let res = [];
  
    let que = [];
    que.push({
      arr: [],
      open: 0,
      close: 0
    });
    while (que.length > 0){
      let { arr, open, close } = que.shift();
      if (open === 0 && close === 0) {
        que.push({
          arr: ['('],
          open: 1,
          close: 0
        });
      } else {
        if (open === close && open === n) {
          res.push(arr.join(''));
        }
        if (close < open) {
          que.push({
            arr: [...arr, ')'],
            open: open,
            close: close + 1
          });
        }
        
        if (open + 1 <= n) {
          que.push({
            arr: [...arr, '('],
            open: open + 1,
            close: close
          });
        }
      }
    }
    return res;
  };
  
  
  console.log('res', generateParenthesis(3));
  /*
    1, 2
    1212 1122
    121212, 111222, 112212
    1: () 
  
    2: (()), ()(), => Within, Append
  
    3: ()()(), ()(()), (())(), ((())), (()())
  
    4: ()()()(), ()((())), ()()(())
  
    1 => ()
    2 => ()() (())
    3 => ()()() (())() 
  */