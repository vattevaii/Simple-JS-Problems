function zigZagTraversal(root) {
    let left = false;
    let result = [];
    let queue = [root];
    while(queue.length){
        let int = [];
      let l = queue.length;
      for(let i=0;i<l;i++){
        let node = queue.shift();
        int.push(node.val);
        if(left){
          if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        else{
          if(node.right)queue.push(node.right);
          if(node.left)queue.push(node.left);
          }
      } 
      console.log(int);
      //if(int.length == 1) result.push(int[0]);
      result.push(int);
      left = !left;
    }
      return result;
  }
  
  