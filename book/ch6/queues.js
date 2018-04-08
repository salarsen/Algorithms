function Node(value){
   this.value = value;
   this.next = null;
}

function SLQueue(){
   var head = null;
   var tail = null;

   this.enqueue = function(val){
      var newNode = new Node(val);
      if(!this.head){
         this.head = newNode;
         this.tail = newNode;
      } else {
         this.tail.next = newNode;
         this.tail = this.tail.next;
      }
      return this;
   }

   this.front = function(){
      if(!this.head){
         return null;
      }
      else {
         return this.head.value;
      }
   }

   this.empty = function(){
      if(!this.head){
         return true;
      } else {
         return false;
      }
   }

   this.dequeue = function(){
      if(!this.head){
         return null;
      } else if (this.head.next === null){
         var front = this.head.value;
         this.head = null;
         this.tail = null;
      } else {
         var front = this.head.value;
         this.head = this.head.next;
      }
      return front;
   }

   this.Contains = function(val){
      if(!this.head){
         return null;
      } else {
         var runner = this.head;
         while(runner){
            if(runner.value === val){
               return true;
            }
            runner = runner.next;
         }
         return false;
      }
   }

   this.sizeOf = function(){
      if(!this.head){
         return 0;
      } else {
         var size = 0;
         runner = this.head;
         while(runner){
            size++;
            runner = runner.next;
         }
         return size;
      }
   }
   this.printQueue = function(){
      if(!this.head){
         return null;
      } else {
         var runner = this.head;
         var str = "";
         while(runner.next !== null){
            str += runner.value;
            str += ", ";
            // console.log(str);
            runner = runner.next;

         }
         return str;
      }
   }
}

var queue = new SLQueue();
var queue2 = new SLQueue();
// console.log(queue.empty());
queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);

queue2.enqueue(5).enqueue(4).enqueue(3).enqueue(4);
// console.log(queue.front());
// console.log(queue.empty());
// console.log(queue.dequeue(),queue);
// console.log(queue.dequeue(),queue);
// console.log(queue.Contains(3));
// console.log(queue.sizeOf());
// queue.dequeue();
// console.log(queue.Contains(5));
// console.log(queue.sizeOf());
// queue.dequeue();
// console.log(compareQueues(queue,queue2));
//
// function compareQueues(queue1, queue2){
//    if(queue1.sizeOf() !== queue2.sizeOf()){
//       return false;
//    } else {
//       while(!queue1.empty() && !queue2.empty()){
//          if(queue1.front() !== queue2.front()){
//             return false;
//          } else {
//             queue1.dequeue();
//             queue2.dequeue();
//          }
//       }
//       return true;
//    }
// }
function removeMin(queue){
   if(queue.empty()){
      return null;
   } else if(queue.head.next === null){
      queue.dequeue();
      return null;
   } else {
      var min = queue.head.value;
      var runner = queue.head.next;
      // find the minimum
      while(runner){
         if(runner.value < min){
            min = runner.value;
         }
         runner = runner.next;
      }
      //remove the minimum
      while(queue.front() === min){
         queue.dequeue();
      }
      var previous = queue.head;
      var runner = queue.head.next;
      while(runner){
         if(runner.value === min){
            previous.next = runner.next;
         } else {
            previous = runner;
         }
         runner = runner.next;
      }
      return true;
   }
}
// console.log(removeMin(queue));
// console.log(queue.Contains(3));
interLeaveQueue(queue);
function interLeaveQueue(queue){
   // console.log(queue.head);
   if(queue.empty()){
      return null;
   } else {
      var size = queue.sizeOf();
      var front = queue.front();
      var newQueue = new SLQueue();
      for(var i = 0; i < size/2; i++){
         newQueue.enqueue(queue.dequeue());
      }
      do{
         newQueue.enqueue(newQueue.dequeue());
         newQueue.enqueue(queue.dequeue());
      } while (newQueue.front() !== front);
      console.log(newQueue.printQueue());
      return this;
   }
}
