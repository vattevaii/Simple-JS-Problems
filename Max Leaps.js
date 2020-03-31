/**
 * @param {number[]} nums
 * @return {boolean}
 */
function maxLeaps(nums) {
	let hopToEnd = true;
  let i = 0;
  while(i < nums.length - 1)
  {
    if(nums[i] == 0) break;
    else i+=nums[i];
  }
  if(i<nums.length-1 || i>=nums.length) hopToEnd = false;
  return hopToEnd;
}


maxLeaps([1, 3, 2, 2, 1]) ; // EQUEAL true;
maxLeaps([2, 1, 0, 1, 4]) ; //return false;
