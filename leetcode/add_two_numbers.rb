def add_two_numbers(l1, l2)
    arr1 = [];
    arr2 = [];

    while l1 || l2 do
        if l1
            arr1.unshift(l1.val);
            l1 = l1.next
        end
        if l2
            arr2.unshift(l2.val);
            l2 = l2.next
        end
    end
          
        
    
    result = (arr1.join('').to_i + arr2.join('').to_i).to_s.split('')
    puts arr1
    previous = nil;
    return result.map { |num|
        previous = ListNode.new(num, previous)
        previous
    }[result.length-1]
    
end