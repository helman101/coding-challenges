function migratoryBirds(arr) {
  let hash = {
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
  }
  
  arr.map((num) => {
      hash[num.toString()]++
  })
  
  return Object.keys(hash).sort((key1, key2) => {
      return hash[key1] > hash[key2] ? -1 : 1
  })[0]
  
}