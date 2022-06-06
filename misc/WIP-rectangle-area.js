var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    if(ax1 === bx1 && ay1 === by1 && 
      ax2 === bx2 && ay2 === by2) {
      let w = Math.abs(bx1 - bx2);
      let h = Math.abs(by1 - by2);
      console.log('same box');
      return w * h;
    }
  
    let p1 = bx1 > ax1 && bx1 < ax2;
    let p2 = bx2 > ax1 && bx2 < ax2;
    let p3 = by1 > ay1 && by1 < ay2;
    let p4 = by2 > ay1 && by2 < ay2
    if (p1 && p2 && p3 && p4) {
      let w = Math.abs(ax1 - ax2);
      let h = Math.abs(ay1 - ay2);
      console.log('with in 1');
      return w * h;
    }
  
    let p11 = ax1 > bx1 && ax1 < bx2;
    let p12 = ax2 > bx1 && ax2 < bx2;
    let p13 = ay1 > by1 && ay1 < by2;
    let p14 = ay2 > by1 && ay2 < by2
    if (p11 && p12 && p13 && p14) {
      let w = Math.abs(bx1 - bx2);
      let h = Math.abs(by1 - by2);
      console.log('with in 2');
      return w * h;
    }
    
  
    
    
    console.log('final');
    let w1 = Math.abs(ax1 - ax2);
    let h1 = Math.abs(ay1 - ay2);
  
    let w2 = Math.abs(bx1 - bx2);
    let h2 = Math.abs(by1 - by2);
  
    let res = (w1 * h1) + (w2 * h2);
    return res;
  };
  
  console.log(computeArea(-2,-2,2,2, -1, -3,1,-1));
  // console.log(computeArea(-2,-1,1,2,-1,0,3,1));
  // console.log(computeArea(-2,1,1,1,0,0,2,2));
  // console.log(computeArea(0,-1,9,2,-3,0,3,4));
  // console.log(computeArea(-2, -2, 2, 2, -2, -2, 2, 2));
  // console.log(computeArea( -2, -2, 2, 2, -1, -1, 1, 1));
  // console.log(computeArea( -1, -1, 1, 1, -2, -2, 2, 2));
  // console.log(computeArea(-4, -1,-1, 1, 1, -1, 4, 1));