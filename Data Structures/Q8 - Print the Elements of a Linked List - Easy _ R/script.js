function printLinkedList(head) {
  let currentNode = head;
  while (currentNode) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}
