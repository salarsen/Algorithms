function ListNode(value){
    return {
        val : value,
        next : null
    }
}

function addBack(list,value){
    var obj = ListNode(value);
    if(list.head == null){
        list.head = obj;
    } else {
        var node = list.head;
        while(node.next != null){
            node = node.next;
        }
        node.next = obj;
    }
    return list;
}

function displayList(list){
   var displayStr = "";
   var runner = list.head;
   while(runner != null){
      if(runner.next != null){
         displayStr = displayStr + runner.val + ", ";
      } else {
         displayStr = displayStr + runner.val;
      }
      runner = runner.next;
   }
   return displayStr;
}

var myList = { head : null }

addBack(myList,10);
addBack(myList,20);
addBack(myList,30);
addBack(myList,5);
console.log(displayList(myList));

function moveMaxBack(list){
   var runner = list.head;
   var max = 0;
   while(runner != null){
      if(runner.val > max){
         max = runner.val;
         console.log(max);
      }
      runner = runner.next;
   }


   runner = list.head;
   while(runner.next != null){

      if(runner.next.val === max){
         runner.next = runner.next.next;
      }
      runner = runner.next;
   }
   var obj = ListNode(max);
   runner.next = obj;

   return list;
}
console.log('break');
console.log(displayList(moveMaxBack(myList)));
