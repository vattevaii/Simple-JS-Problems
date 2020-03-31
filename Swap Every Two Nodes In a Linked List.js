function swapEveryTwo(head) {
    let fNode = head;
    let lNode = fNode.next;
    while(fNode && lNode){
        let temp = fNode.val;
      console.log(temp);
      fNode.val = lNode.val;
      lNode.val = temp;
      fNode = lNode.next;
      if(fNode) lNode = fNode.next;
    }
    while(head){
      console.log(head.val); head=head.next;
    }
    return head;
  }
  
  const list = new Node(1);
  list.next = new Node(2);
  list.next.next = new Node(3);
  list.next.next.next = new Node(4);
  
  swapEveryTwo(list);
  
  