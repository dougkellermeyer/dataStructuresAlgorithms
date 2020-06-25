//linked list stores 
// node has a piece of data (value and reference)

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //implement a push method
   
    //if there is a head, set the next property on the tail to be the new node 
    //and set the tail property on the new list to be the newly created node
    push(val){
        //=> needs to accept value, create a new Node 
        let newNode = new Node(val);
        //if no head, set head and tail equal to the new node
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head; //or this.tail = newNode; same thing :) 
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let list = new SinglyLinkedList()
list.push("Hello");
list.push(1);
list.push(2);

console.log(list);
