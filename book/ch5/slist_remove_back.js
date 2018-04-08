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

var myList = { head : null }

addBack(myList,10);
addBack(myList,20);
addBack(myList,30);
addBack(myList,5);
console.log(myList);

function removeBack(list){
   var runner = list.head;
   while(runner.next.next != null){
      console.log(runner.val);
      runner = runner.next;
   }
   runner.next = null;
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

console.log(displayList(removeBack(myList)));
