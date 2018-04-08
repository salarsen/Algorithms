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

function getBack(list){
   if(!list.head) { return null };
   var runner = list.head;
   while(runner.next != null){
      runner = runner.next;
   }
   return runner.val;
}

console.log(getBack(myList));

function removeBack(list){
    if(!list.head) return null;

    var runner = list.head;
    while(runner.next){
        if (!runner.next.next){
            console.log(`removing ${runner.next.val}`);
            runner.next = null;
            return list;
        }
        runner = runner.next;
    }
    return 0;
}

console.log(removeBack(myList));
console.log(getBack(myList));