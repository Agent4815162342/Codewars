function findOdd(arr) {
  let obj = {};
  arr.forEach((elem) => {
    if (obj[elem]) {
      obj[elem]++;
    } else {
      obj[elem] = 1;
    }
  });
  for (let key in obj) {
    if (obj[key]%2 == 1) return +key
  }
}