function ListNode(value){
    return {
        val : value,
        next : null
    }
}

var myList = { head : null }


function searchList(myList){
    var node = myList.head;
    var found = false;
    while(node != null && !found){ // !found prevents us from continuing search once we have found our friend
        if(node.val == "Tad"){
            found = true;
        } else {
            node = node.next;
        }
    }
    return found;
}

var Obj1 = ListNode("Bob");
myList.head = Obj1;
var Obj2 = ListNode("Charlie");
Obj1.next = Obj2;
var Obj3 = ListNode("Spencer");
Obj2.next = Obj3;
console.log(myList);
var rudy = ListNode("Rudy");
Obj3.next = rudy;

//is he here yet?
console.log(searchList(myList));

var tad = ListNode("Tad")
rudy.next = tad;

console.log(searchList(myList));
