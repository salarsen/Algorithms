function Stack(){
   var arr = [];

   this.push = function(val){
      arr.push(val);
      return this;
   }

   this.pop = function(val){
      if(arr.length === 0){
         return null;
      } else {
         return arr.pop();
      }
   }

   this.top = function(){
      if(arr.length === 0){
         return null;
      } else {
         return arr[arr.length - 1];
      }
   }

   this.sizeOf = function(){
      return arr.length;
   }

   this.isEmpty = function(){
      if(arr.length === 0){
         return true;
      } else {
         return false;
      }
   }

   this.contains = function(val){
      if(arr.length === 0){
         return false;
      } else {
         for(var i = 0; i < arr.length; i++){
            if(arr[i] === val){
               return true;
            }
         }
         return false;
      }
   }
}

var ourStack = new Stack();
console.log(ourStack.isEmpty());

ourStack.push(3).push(5).push(-3).push(10);
console.log(ourStack.pop());
console.log(ourStack.contains(6));
console.log(ourStack.isEmpty());
console.log(ourStack.sizeOf());
