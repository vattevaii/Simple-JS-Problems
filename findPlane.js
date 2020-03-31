function numOfPlanes(grid) {
    // fill this in
    let planes = [];
      let num=0;
      for(let i in grid){
        for(let j in grid[i]){
          if(grid[i][j] == 'P'){
            planes.push([parseInt(i),parseInt(j)]);
            let r = [];
            let found = false;
            r.push([parseInt(i-1),parseInt(j)]);
            r.push([parseInt(i),parseInt(j-1)]);
            console.log(r);
            console.log(planes);
            for(let a of r){
              if(!found)for(let b of planes){
                if(a[0] == b[0] && a[1] == b[1]){
                    found = true;
                  break;
                }
              }
            }
            if(!found) num++;
          }
        }
      }
      return num;
  }
  
  const planeMatrix1 = [
    ['.', '.', '.', 'P'],
    ['.', '.', '.', 'P'],
    ['P', 'P', '.', 'P'],
    ['.', '.', '.', 'P']
  ];
  
numOfPlanes(planeMatrix); //==2  