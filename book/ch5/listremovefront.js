function ListNode(value){
    return {
        val : value,
        next : null
    }
}

var myList = { head : null }

var Obj1 = ListNode("Bob");
myList.head = Obj1;
var Obj2 = ListNode("Charlie");
Obj1.next = Obj2;
var Obj3 = ListNode("Spencer");
Obj2.next = Obj3;
console.log(myList);
var rudy = ListNode("Rudy");
// rudy is cutting
rudy.next = myList.head;
myList.head = rudy;
// console.log(myList);
// removes rudy from front of line, however it does not set rudy's next to null
myList.head = myList.head.next;
console.log(myList);
// we can only do this if we know the variable the object is referenced at
rudy.next = null;
console.log(popFront(myList));
console.log(popFront(myList));
console.log(popFront(myList));
console.log(popFront(myList));
function popFront(list){
    if(list.head == null){
        return null;
    } else {
        var temp = list.head;
        list.head = list.head.next;
        temp.next = null;
        temp = null;
    }
    return list;
}
