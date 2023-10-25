class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head) // (data , next)
    this.size++
  }

  //insert last node

  insertLast(data) {
    const newNode = new Node(data)
    let current
    // if empty create a Head
    if (!this.head) {
      this.head = newNode
    }
    // if there is a head
    else {
      current = this.head
      // console.log("current:", current)

      while (current.next) {
        current = current.next
      }

      current.next = newNode
      // console.log("next:", current.next)
    }
    this.size++
  }

  //insert at index
  insertAt(data, index) {
    // out Of range
    if (index > 0 && index > this.size) {
      return
    }

    if (index === 0) {
      // this.insertFirst(data)
      this.head = new Node(data, this.head)
      return
    }

    const newNode = new Node(data)
    let current, previous

    // Set current to first
    current = this.head
    let count = 0

    while (count < index) {
      previous = current // node before index
      count++
      current = current.next // node after index
    }
    newNode.next = current
    previous.next = newNode
    this.size++
  }
  //Get at index
  //Remove at index
  //clear list

  //print  list  data
  printListData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
      // console.log(current)
    }
  }
}

const ll = new LinkedList()

ll.insertFirst(100)
ll.insertFirst(150)
ll.insertFirst(175)
// ll.insertLast(200)
ll.insertAt(500, 0)
ll.insertAt(222, 2)

ll.printListData()
// console.log(ll)
