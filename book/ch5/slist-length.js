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

addBack(myList,"Bob");
addBack(myList,"Charlie");
addBack(myList,"Spencer");
addBack(myList,"testing");

function slistLength(list){
   var length = 0;
   var runner = list.head;
   while(runner != null){
      runner= runner.next
      length++;
   }
   return length;
}

console.log(slistLength(myList));
