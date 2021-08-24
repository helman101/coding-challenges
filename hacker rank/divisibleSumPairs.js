function divisibleSumPairs(n, k, ar) {
  ar = ar.sort()
  
  let counter = 0;
  
  for (let i = 0; i < n; i++) {
      let cnum = ar[i]
      for (let j = i+1; j < n; j++) {
          let sum = cnum + ar[j]
          if (sum%k === 0) {
              counter++
          }
      }
  }

  return counter
}