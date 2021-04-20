//we create a class for node
class Node {
    constructor(value){
      this.value = value;
      this.prev = null; 
      this.next = null;    
    };
  }
//we create a list class
  class doublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
    
    append(value){
        //make a new node with the value
        const newNode = new Node(value);
        //if list is empty, make node head and tail
        if(!this.head) {
          this.head = newNode;
          this.tail = newNode;        
        } else {
          //otherwise add to end of list
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
          newNode.next = null;
        }
        //add 1 to size
        this.size ++;
        return this;
    }

    prepend(value){
      //make a new node with the value
      let newNode = new Node(value);
      if(!this.head){
        this.head = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        newNode.next = current;
        current.prev = newNode;
        this.head = newNode;
      }

      this.size ++;

    }

    //insert an value after a certain value
    insertAfter(valueFind, valueInsert){
        let currentNode = this.head; 
        
        if(this.tail.value == valueFind){
          this.append(valueInsert);
        } else {
          while(currentNode){ 
            if(currentNode.value == valueFind){
              let newNode = new Node(valueInsert);
              newNode.next = currentNode.next;
              newNode.next.prev = newNode;
              newNode.prev = currentNode;
              currentNode.next = newNode;
              this.size ++;
              break;
            }
            currentNode = currentNode.next;
          }
        }
 }
    // ---- reverse with 3 variable ----
    reverseA(){
      let current, second, third;
      if(!this.head){
         console.log("Nothing to reverse!");
      }else if(this.head.next){
        current = this.head;
        second = this.head.next;
        third = second.next;
        //update the head and the tail
        this.tail = current;
        this.tail.next = null;
        this.tail.prev = second;
        this.head = second;
        this.head.next = current;
        this.head.prev = null;
        second = third;
        //add next node in front of list
        while(second){             
            third = second.next;  
            second.next = this.head;
            this.head.prev = second;
            second.prev = null;
            this.head = second;
            second = third;          
        } 
      }else {
        console.log('We have just One Node!');
      }
    }

    // ---- reverse with function prepend() and 2 (3 variable if you want to use third variable and not current 2 time) variable ----
      // reverseB() {
      //   let current, second;
      //   if(!this.head){
      //     console.log('Nothing to reverse!');
      //   }else if(this.head.next){
      //     // change the head to tail and save head.next in a variable
      //     //i will use current to change tail and value from second
      //     current = this.head;
      //     second = this.head.next;
      //     this.tail = current;
      //     this.tail.next = null;
      //     this.tail.prev = second;
      //     //part were we take the second.next node in current variable
      //     current = second.next;
      //     second.next = this.tail;
      //     this.head = second;
      //     second.prev = null;
      //     second = current;        
      //     while(second){
      //       current = second.next;
      //       this.prepend(second.value);
      //       this.size--;
      //       second = current;           
      //     }
      //   } else {
      //     console.log('We have just One Node!');
      //   }
      // }

  }
  
  let listA = new doublyLinkedList();
  listA.append('3');
  listA.append('5');
  listA.append('7');  
  listA.insertAfter('3', '4');
  listA.insertAfter('7', '8');
  // // listA.prepend('a');

  // listA.reverseB();
  listA.reverseA();
  console.log(listA)
 
