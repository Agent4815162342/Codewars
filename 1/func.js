function encrypt(text, n) {
if (text === null || !text.split.length) return text;
  while (n > 0) {
    let even = [],
        odd = [];
    text.split('').forEach((item, index) => {
      index%2 ? odd.push(item) : even.push(item); 
    });
    text = odd.concat(even).join('');
    n--;
  }
  return text;
}

function decrypt(encryptedText, n) {
if (encryptedText === null || !encryptedText.split.length) return encryptedText;
  let arr = encryptedText.split('');
  let result = [];
  if (n <= 0) {
    return arr.join('')
  }
  let num = Math.floor(arr.length/2);
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
     if (i%2 == 0) {
       result[i] = arr[num + i - j + 1];
     } else {
       result[i] = arr[i-j]
       j++;
     }
   };
  n--;
  return decrypt(result.join(''), n);
}