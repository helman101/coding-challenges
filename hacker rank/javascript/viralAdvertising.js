function viralAdvertising(n) {
  let count = 0;
  let p = 5;
  for (let i=1; i<=n; i++) {
      p = Math.floor(p/2)
      count += p
      p = p*3
  };
  
  return count
}