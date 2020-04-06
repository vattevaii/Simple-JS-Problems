function stringFromTree(tree) {
    // fill in
    let string = "";
    string += tree.val+recTree(tree);
      return string;
  }
  
  function recTree(tree){
    let left =tree.left;
    let right = tree.right;
    if(left && right)
      return "["+left.val+recTree(left)+"]"+ 
        "["+right.val+recTree(right)+"]";
    else if(left)
      return "["+left.val+recTree(left)+"]";
    else if(right)
      return "["+right.val+recTree(right)+"]";
    else
      return '';
  }

//   Output becomes like this 4[2[3][4]][5[6]]
// Tree is like head = 4 , Under Head -> 2 and 5, Under 2 -> 3 and 4 , Under 5 -> 6;
// Tree is a BST