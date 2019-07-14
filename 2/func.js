function duplicateEncode(word){
  word = word.toLowerCase();
  let obj = {};
  for (let i = 0; i < word.length; i ++) {
    if (obj.hasOwnProperty(word[i])) {
      obj[word[i]]++
    } else {
      obj[word[i]] = 1;
    }
  };
  let arr = word.split('');
  for (let j = 0; j < arr.length; j++) {
    if (obj[word[j]] > 1) {
      arr[j] = ')';
    } else {
      arr[j] = '(';
    }
  }
  return arr.join('');
}