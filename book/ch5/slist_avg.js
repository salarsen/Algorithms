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

var myList = { head : null };

addBack(myList,10);
addBack(myList,20);
addBack(myList,0);
addBack(myList,10);

function avg(list){
   var sum = 0;
   var count = 0;
   var runner = list.head;
   while(runner != null){
      sum = sum+ runner.val;
      runner= runner.next;
      count++;
   }
   return sum/count;
}

console.log(avg(myList));
