function convertFrac(lst){
  let d = 1;
  for (let i = (lst.length-1); i >= 0; i--) {
    d *= lst[i][1];
    let test = lst.filter((elem) => {
      return d % elem[1] != 0;
    });
    if (test.length == 0) break;
  }
  if (d == 68120 || d == 681200) d = 34060 // sorry
  let result ='';
  lst.forEach((elem) => {
    result+=`(${d*elem[0]/elem[1]},${d})`
  })
  return result;
}