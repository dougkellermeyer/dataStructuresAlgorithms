//super high level example of what the pointer
const n1 = {
    data: 100
}

const n2 = {
    data: 200
}

n1.next = n2; 

console.log(n1);

//More in depth in example
class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    //-- Methods --
    //insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
        this.length++;
    }
    //insert last node
    insertLast(data){
        let node = new Node(data);
        let current;
        //if empty, make head
        if(!this.head){
            this.head = node;
        } else{
            current = this.head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }
        this.length++
    }
    //insert at index

    //get at index

    //remove at index

    //clear list 

    //print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(400);
ll.printListData();

