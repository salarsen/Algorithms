function Node(val){
   this.value = val;
   this.next = null;
}
function SLStack(){
   var top = null;

   this.push = function(val){
      // console.log('pushing',val);
      var newNode = new Node(val);
      if(!top){
         // console.log('empty stack');
         top = newNode;
      } else {
         // console.log('adding to top');
         newNode.next = top;
         top = newNode;
      }
      return this;
   }

   this.pop = function(){
      if(!top){
         return null;
      } else {
         var topVal = top.value;
         top = top.next;
         return topVal;
      }
   }

   this.top = function(){
      if(!top){
         return null;
      } else {
         return top.value;
      }
   }

   this.isEmpty = function(){
      if(!top){
         return true;
      } else {
         return false;
      }
   }

   this.sizeOf = function(){
      if(!top){
         return 0;
      } else {
         var size = 0;
         var runner = top;
         while(runner){
            size++;
            runner = runner.next;
         }
         return size;
      }
   }

   this.contains = function(val){
      if(!top){
         return null;
      } else {
         var runner = top;
         while(runner){
            if(runner.value === val){
               return true;
            }
            runner = runner.next;
         }
         return false;
      }
   }
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
         while(runner){
            str += runner.value;
            str += ", ";
            // console.log(str);
            runner = runner.next;

         }
         return str;
      }
   }
}

var ourQueue = new SLQueue();
ourQueue.enqueue("k").enqueue("a").enqueue("y").enqueue("a").enqueue("k");
var testQueue = new SLQueue();
testQueue.enqueue("k").enqueue("a").enqueue("b");
console.log(ourQueue.printQueue());
console.log(isPalidrome(ourQueue));
console.log(isPalidrome(testQueue));
function isPalidrome(queue){
   var stack = new SLStack();
   do{
      stack.push(queue.front());
      queue.enqueue(queue.dequeue());
   }while(stack.sizeOf() !== queue.sizeOf());
   var palidrome = true;
   do{
      if(stack.top() !== queue.front()){
         palidrome = false;
      }
      stack.pop();
      queue.enqueue(queue.dequeue());
   } while(!stack.isEmpty());
   return palidrome;
}
