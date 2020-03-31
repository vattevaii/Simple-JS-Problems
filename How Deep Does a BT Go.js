function howDeep(root) {
    let deep = 0;
    let maxdeep = 0;
    if(!root) return 0;
    else if(!root.left && !root.right)
      return 1;
    else{
      let l = howDeep(root.left);
      let r = howDeep(root.right);
      return (l>r)?l+1:r+1;
    }
    //return root;
  }