//we create a class for node
class Node {
    constructor(value){
      this.value = value;
      this.next = null;    
    }
  };

//we create a list class
class singleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value){
        let newNode =  new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
    
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.next = null;
        }
        this.size ++;
        return this;
    }

    prepend(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null
        } else { 
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    reverseA1(){
        let currentNode = this.head;
        if(!currentNode || this.size == 1 ){ // this.size you can check and with currentNode.next == null
            console.log('Ups! Now you see my back!!!');
            return this;  //to break here
        }
        if(this.size == 2){     //you can check and with currentNode.next == this.tail     
           currentNode.next.next = currentNode; //save the head node in the tail.next pointer
           this.head = currentNode.next;//save the head node to be the tail
           this.tail = currentNode;//save the tail to be the head
           this.tail.next = null;//the tail.next(was the head and have a next pointer) must to be null   
           return this;  //to break here      
        }

        //we save the 3 node ex currentNode.next.next in a new variable
        let temp = currentNode.next.next;
        //we take the  1st and 2nd   node and we reverse them  
        currentNode.next.next = currentNode;
        this.head = currentNode.next;
        this.tail = currentNode; 
        this.tail.next = null;            
        if(temp.next == null){
            // this.prepend(temp.value);  
            // this.size --;     
            temp.next = this.head;
            this.head = temp;         
        }else{
            while(temp){               
                this.prepend(temp.value);                   
                this.size --;
                temp = temp.next;
                // let tempNext = temp.next;
                // temp.next = this.head;
                // this.head = temp;
                // temp = tempNext;                 
            } 
            return this;
        }
        
        

    }
} 
let listA = new singleLinkedList;

listA.append('10');
listA.append('14');
listA.append('17');
listA.append('21');
listA.append('25');
listA.append('31');
listA.append('41');
listA.prepend("2");

listA.reverseA1();
// listA.reverse();

console.log(listA);
