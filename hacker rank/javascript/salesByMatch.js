function sockMerchant(n, ar) {
  let hash = {};
  let counter = 0;
  
  ar.forEach((num) => {
      let key = num.toString()
      hash[key] ? hash[key]++ : hash[key] = 1
      if (hash[key]%2 === 0) {
          counter++
      }
  })
  
  return counter
}