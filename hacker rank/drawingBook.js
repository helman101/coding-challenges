function pageCount(n, p) {
  let f = n%2 == 0 ? n : n-1
  let count = 0;
  for (let i=1; i<=n; i+=2) {
      if (!(f%2 === 0) && f-1 === p && count === 0) { return count };
      if (i >= p || f <= p) { return count };
      f-=2;
      count++;
  }
  
  return count;
}