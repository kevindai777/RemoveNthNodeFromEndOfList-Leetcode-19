//Objective is to remove the nth node from a linked list.

class Node {
    constructor(val, next = null) { //if next is not given, assume it is empty
      this.val = val
      this.next = next
    }
}

class LinkedList {
    constructor() {
      this.head = null
    }

    addNodeToBack(data) {
        let current = this.head //initialize to beginning
    
        if (!this.head) { //if the list is empty...
            this.head = new Node(data)
        } else {
            while (current.next) {
                current = current.next //move along the list
            }
            current.next = new Node(data)
        }
    }
}

let head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(2)
head.next.next.next.next = new Node(1)

let n = 4


//O(n) solution that does a 2-pass over the linked list - one to get the length of the list
//and another to remove the nth node.

let count = 0
let newNode = new Node(-1)
newNode.next = head 

let curr = head 
while (curr) {
    count++
    curr = curr.next
}

count -= n

curr = newNode 
while (count > 0) {
    count--
    curr = curr.next
}
curr.next = curr.next.next 

return newNode.next