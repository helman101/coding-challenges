function compareTriplets(a, b) {
  let r = [0,0];
  for (let i=0; i<=2; i++){
     if (a[i] < b [i]){
         r[1] += 1;
     } else if (a[i] > b [i]){
         r[0] += 1;
     }
  }
  return r;
}