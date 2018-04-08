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
addBack(myList,-5);
addBack(myList,5);
console.log(displayList(myList));

function moveMinFront(list){
   var runner = list.head;
   var min = 0;
   while(runner != null){
      if(runner.val < min){
         min = runner.val;
      }
      runner = runner.next;
   }

   //reset runner
   runner = list.head;
   while(runner.next != null){
      if(runner.next.val === min){
         runner.next = runner.next.next;

      }
      runner = runner.next;
   }
   var obj = ListNode(min);
   obj.next = list.head;
   list.head = obj;
   return list;
}

console.log(displayList(moveMinFront(myList)));
