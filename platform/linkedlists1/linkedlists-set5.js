function ListNode(value){
   return {
      val : value,
      next : null,
   }
}

function addBack(list, value){
   var obj = ListNode(value);
   if(!list.head){
      list.head = obj;
      return list;
   }

   var node = list.head;
   while(node.next){
      node = node.next;
   }
   node.next = obj;
   return list;
}

function displayList(list) {
   var displayStr = "";
   var runner = list.head;
   while (runner != null) {
      if (runner.next != null) {
         displayStr = displayStr + runner.val + ", ";
      } else {
         displayStr = displayStr + runner.val;
      }
      runner = runner.next;
   }
   return displayStr;
}

var myList = { head : null };

addBack(myList,11);
addBack(myList,10);
addBack(myList,5);
addBack(myList,3);
addBack(myList,6);

function moveMinToFront(list){
   if(!list.head){return null};

   var min = list.head;
   var temp = null;
   var runner = list.head.next;
   while(runner){
      if(runner.val < min.val){
         temp = min;
         min = runner;
      }
      runner = runner.next;
   }

   temp.next = min.next;
   min.next = list.head;
   list.head = min;
}
console.log('before',displayList(myList));
moveMinToFront(myList);
console.log('after',displayList(myList));

function moveMaxToFront(list){
   if(!list.head) { return null };

   var max = list.head;
   var temp = null;
   var runner = list.head.next;
   while(runner.next){
      console.log(runner.val);
      if(runner.val > max.val){
         temp = max;
         max = runner;
      }
      runner = runner.next;
   }
   //check last
   if(max.val > runner.val){
      temp.next = max.next;
      runner.next = max;
      max.next= null;
   }
   // temp.next = max.next;
   // runner = max;
}

moveMaxToFront(myList);
console.log('after max',displayList(myList));

function swapNodes(list,Node1,Node2){
   if(!list.head) return null;

   console.log('checking first node',list.head.val)
   if(list.head.val === Node1.val){
      Node2.next = list.head.next;
      list.head = Node2;
      return true;
   }

   var runner = list.head;
   while(runner.next){
      console.log(runner.next.val);
      if(runner.next.val === Node1.val){
         console.log(`swapping ${Node1.val} with ${Node2.val}`);
         Node2.next = runner.next.next;
         runner.next = Node2;
         return true;
      }
      runner = runner.next;
   }

   return false;
}
var Node1 = new ListNode(6);
var Node2 = new ListNode(20);
console.log(swapNodes(myList,Node1,Node2));
console.log(displayList(myList));
var Node3 = new ListNode(30);
console.log(swapNodes(myList, Node3, Node2));
// console.log()