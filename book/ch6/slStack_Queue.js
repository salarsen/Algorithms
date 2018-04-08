function node(val){
   this.value = val;
   this.next = null;
}
function SLStack(){
   var top = null;

   this.push = function(val){
      // console.log('pushing',val);
      var newNode = new node(val);
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
   var main = new SLStack();
   var second = new SLStack();

   this.enqueue = function(val){
      console.log('pushing',val);
      main.push(val);
      return this;
   }

   this.front = function(){
      // move to second stack to pull top
      while(!main.isEmpty()){
         second.push(main.pop());
      }
      var front = second.top();
      // move back to main stack
      while(!second.isEmpty()){
         main.push(second.pop())
      }
      return front;
   }

   this.isEmpty = function(){
      return main.isEmpty();
   }

   this.dequeue = function(){
      if(main.isEmpty()){
         return null;
      } else {
         while(!main.isEmpty()){
            second.push(main.pop());
         }
         var front = second.pop();
         while(!second.isEmpty()){
            main.push(second.pop());
         }
      }
      return front;
   }

   this.Contains = function(val){
      return main.contains(val);
   }

   this.sizeOf = function(){
      return main.sizeOf();
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

queue.enqueue(1).enqueue(2).enqueue(3).enqueue(4).enqueue(5);
console.log(queue.dequeue());
console.log(queue.front());
console.log(queue.sizeOf());
console.log(queue.isEmpty());
console.log(queue.Contains(3));
