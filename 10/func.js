function add(x, y) {
  let res;
  if (x*y >= 0) {
    res = (new Array(Math.abs(x))).concat(new Array(Math.abs(y))).length;
    if ((x == 0 && y > 0) || (y == 0 && x > 0) || (x > 0 && y > 0)) {
      return res;
    } else if ((x == 0 && y < 0) || (y == 0 && x < 0) || (x < 0 && y < 0)){
      return [].indexOf(1) * res
    }
  } else if (x*y < 0) {
   res =  Math.abs(x) > Math.abs(y) ?  (new Array(Math.abs(x))).slice(Math.abs(y)).length :
                                 (new Array(Math.abs(y))).slice(Math.abs(x)).length;
    if ((x < 0 && Math.abs(x) > Math.abs(y)) || (y < 0 && Math.abs(x) < Math.abs(y))) {
      return [].indexOf(1) * res
    } else if ((x > 0 && Math.abs(x) > Math.abs(y)) || (y > 0 && Math.abs(x) < Math.abs(y))) {
      return res;
    } else if (Math.abs(x) == Math.abs(y)) {
      return 0;
    }
  }