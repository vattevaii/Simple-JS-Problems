function removeFromEnd(head, idxFromEnd) {
    let arr = [];
    while(head != null){
      arr.push(head);
      head = head.next;
    }
    pIndex = arr.length -1 - idxFromEnd;
    let prevNode = arr[pIndex];
    let nextNode = arr[pIndex+2];
    prevNode.next = nextNode;
    return arr[0];
  }
  
  