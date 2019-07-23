function stringExpansion(s) {
  s = s.split('');
  let res = [];
  let mul = {
    value: 1,
    len: 0
  };
  for (let i = 0; i < s.length; i ++) {
    if (!isNaN(parseInt(s[i]))) {
      mul.value = s[i];
      mul.len++;
    } else {
      for (let j = 0; j < mul.value; j++) {
        res.push(s[i]);
      }
    } 
  }
  return mul.len == 0 ? s.join('') : res.join('')
}