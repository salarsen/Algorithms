function ListNode(value){
    return {
        val : value,
        next : null
    }
}

var myList = { head : null }
console.log(myList);
addBack(myList,"Bob");
console.log(myList);
addBack(myList,"Charlie");
console.log(myList);
addBack(myList,"Spencer");
console.log(myList);
console.log(myList);
console.log(addBack(myList,"testing"));
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
function addFront(list,value){
    var obj = ListNode(value);
    if(list.head == null){
        list.head = obj;
    } else {
        obj.next = list.head;
        list.head = obj;
    }
    return list;
}
console.log(myList);
console.log(addFront(myList,"Rudy"));
