function mergeSortedLists(head1, head2) {
    // Fill in this method
    let node = null; 
    if(head1.value<head2.value){
      node = head1;
      head1=head1.next;
      }
    else{
      node = head2;
      head2 =head2.next;
      }
    let currNode = node;
    while(head1 || head2){
      if(!head1){
        currNode.next=head2;
        break;
        }
      if(!head2){
        currNode.next=head1;
        break;
        }
      if(head1.value<head2.value){
      currNode.next = head1;
      head1=head1.next;
      }
    else{
      currNode.next = head2;
      head2 =head2.next;
      }
      currNode = currNode.next;
    }
    return node;
  }
  
  function Node(val) {
    this.value = val;
    this.next = null;
  }
  
  const list1 = new Node(1);
  list1.next = new Node(2);
  
  const list2 = new Node(1);
  list2.next = new Node(3);
  
  console.log(mergeSortedLists(list1, list2));