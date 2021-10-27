function angryProfessor(k, a) {
  let count = 0;
  
  a.forEach((time) => {
      if (time <= 0) {
          count++
      }
  })
  
  return count < k ? 'YES' : 'NO'
}
