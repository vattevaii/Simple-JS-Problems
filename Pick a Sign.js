// https://algodaily.com/challenges/pick-a-sign

function numSignWays(nums, target) {
    // Fill in this method
    let n = nums.length;
    let tot = 2**n;
    let sums=0;
    for(let i=0; i<tot; i++){
      let j = i;
      if(helper(j,n,nums) == target) sums+=1;
    }
    console.log(sums);
    return sums;
  }
  
  function helper(step,n, nums) {
    // Fill in this method
    let ret = [];
    for(let i=0;i<n;i++){
      if(step%2 == 0)
        ret.push(nums[i]);
      else ret.push(-nums[i]);
      step = Math.floor(step/2);
    }
    //console.log(ret);
    return ret.reduce((a,b)=>a+b);
  }
  
  numSignWays([2, 1, 3, 2], 4);
  