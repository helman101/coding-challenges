function countingValleys(steps, path) {
  let v = 0;
  let count = 0;
  for (let i=0; i<steps; i++) {
      path[i] === 'U' ? count++ : count--
      if (count === 0 && path[i] === 'U') { v++ }
  }

  return v
}