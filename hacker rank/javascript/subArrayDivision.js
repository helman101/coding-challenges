function birthday(s, d, m) {
  let counter = 0
  
  for (let i = 0; i < s.length - m + 1; i++) {
      let result = s.slice(i, m + i).reduce((a, b) => a + b, 0)
      if (result == d) {
          counter++;
      };
  };
  
  return counter
}
