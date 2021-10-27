function getMoneySpent(keyboards, drives, b) {
  let r = -1;
  for (let i=0; i<keyboards.length; i++) {
      let k = keyboards[i];
      for (let j=0; j<drives.length; j++) {
          let d = drives[j];
          console.log(k, d);
          if ((d + k) <= b && (d + k) > r) {
              r = d+k
          }
      }
  }
  
  return r
}
