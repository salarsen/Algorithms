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
         return top;
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

var ourStack = new SLStack();
var testStack = new SLStack();
// console.log(ourStack.isEmpty());
ourStack.push(3).push(4).push(6);
testStack.push(2).push(4).push(6);
// console.log(ourStack.isEmpty());
// console.log(ourStack.top());
// console.log(ourStack.contains(2));

function compareStacks(stackOne, stackTwo){
   var tempStack = new SLStack();
   var identical = true;
   var size = stackOne.sizeOf();
   // while(stackOne.top() !== null || identical !== false){
   // for(var i = 0; i < size; i++){
   while(stackOne.top() && stackTwo.top()){
      if(stackOne.top() === stackTwo.top()){
         console.log('top match');
         console.log(stackOne.top(),stackTwo.top());
         tempStack.push(stackOne.pop())
         stackTwo.pop();
      } else {
         identical = false;
      }
   }
   console.log(identical);
   // } while(stackOne.top() || identical !== false)
   // while(tempStack.top() !== null){
   //    stackOne.push(tempStack.top());
   //    stackTwo.push(tempStack.pop());
   // }
   return identical;
}

console.log(compareStacks(ourStack, testStack));
