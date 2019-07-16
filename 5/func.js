function who(initWeights,specWeights,n){
  let info = [];
  let res = [];
  who.count = 1;
  initWeights.forEach((elem, ind, arr) => {
    info[ind] = {
      id1 : ind+1,
      weight: arr[ind]
    }
  })
  info.sort((a, b) => b.weight - a.weight).forEach((elem, ind, arr) => {
    arr[ind].weight += specWeights[ind];
    if (arr[ind - 1] && arr[ind-1].weight == arr[ind].weight) who.count++;
  })
  if (who.count == info.length) {
    info.reverse();
  }
  info.sort((a,b) => b.weight - a.weight);
  for (let i = 0; i < n; i++) {
    res[i] = info[i].id1;
  }
  return res;
}