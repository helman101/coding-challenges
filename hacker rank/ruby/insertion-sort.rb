def insertionSort1(n, arr)
  l = n-2
  to_sort = arr.pop
  e = []
  until arr[l] == nil || to_sort > arr[l]
      e.unshift(arr.pop)
      print arr.slice(0, l).concat([e.first]).concat(e).join(' ')
      puts
      l -= 1
  end
  print arr.slice(0, l+1).concat([to_sort]).concat(e).join(' ')
end