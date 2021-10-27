function staircase(n) {
  let stair = [];

  for (let i=1; i<=n; i++){
      stair.push(' ');
  }

  for (let m=(n-1); m>=0; m--){
      stair[m] = '#';
      let result = stair.join('');
      console.log(result);
      
  }
}