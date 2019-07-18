function alphabetized(s) {
let str = s.replace(/[\W\d_]/g, '')
str = str.split('').map((el, ind, arr) => {
  return {
    prev: arr[ind],
    low: arr[ind].toLowerCase(),
    ind: ind
  }
}).sort((a,b) => {
  if (a.low === b.low) {
    return a.ind < b.ind ? -1 : 1;
  };
  return a.low < b.low ? -1 : 1;
}).map((el, ind, arr) => el.prev).join('');
return str
}