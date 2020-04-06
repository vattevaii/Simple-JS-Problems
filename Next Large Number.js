function nextLargerNumber(nums) {
    // implement this function
    let larger = [];
    for(let n in nums){
      let large = nums[n];
      let next = n+1;
      while(next != n){
        if(nums[next]>large) break;
        next = (next+1)%nums.length;
      }
      if(n!=next) larger.push(nums[next]);
      else larger.push(-1);
    }
      return larger;
  }
  
  nextLargerNumber([3,1,3,4]);