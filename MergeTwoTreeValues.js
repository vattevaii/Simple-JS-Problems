function Node(val) {
    this.val = val;
    this.left = this.right = null;
  }
  
  function mergeTwoBinaryTrees(tree1, tree2) {
    // Fill in this method
    tree1.val+=tree2.val;
    if(tree1.left && tree2.left)
    mergeTwoBinaryTrees(tree1.left,tree2.left);
    else if(tree1.left) return;
    else tree1.left = tree2.left;
    if(tree1.right && tree2.right)
    mergeTwoBinaryTrees(tree1.right,tree2.right);
    else if(tree1.right) return;
    else tree1.right = tree2.right;
    return tree1;
  }