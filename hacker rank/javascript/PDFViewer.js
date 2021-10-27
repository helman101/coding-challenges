function designerPdfViewer(h, word) {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  let max = 0;
  for (var i = 0; i < word.length; i++) {
      let res = h[abc.indexOf(word[i])]
      if (max < res) {
          max = res
      }
  }
  
  return max*word.length
}
