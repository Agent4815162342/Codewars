function reverse(str){
  str = str.trim()
  let arr = str.split(' ')
  .map((val,ind,arr) => {
      return  ind%2 ? arr[ind].split('').reverse().join(''): arr[ind]
  })
  return arr.join(' ')
}