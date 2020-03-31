function mergeIntervals(ranges) {
	// return ranges
  let prev = ranges[0];
  let i = 1;
  while(i<ranges.length){
    if(prev[1] > ranges[i][0]){
      prev[1] = ranges[i][1];
      ranges.shift();ranges.shift();
      ranges.unshift(prev);
    }
    else{
      prev = ranges[i];
      i++;
    }
  }
	return ranges;
}

let r = [[1,4],[3,5],[6,7],[10,14],[13,15]];
mergeIntervals(r);  // returns [[1,5],[6,7],[10,15]];