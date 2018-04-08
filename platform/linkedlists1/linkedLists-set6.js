//setup & display functions
function ListNode(value) {
   return {
      val: value,
      next: null,
   }
}

function addBack(list, value) {
   var obj = ListNode(value);
   if (!list.head) {
      list.head = obj;
      return list;
   }

   var node = list.head;
   while (node.next) {
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
//dedupe Slist

function dedupe(list){
    if(!list.head) return null;

    var runner = list.head;
    var secondRunner = null;
    var temp = null;
    while(runner){
        // console.log(`Searching for ${runner.val}`);
        secondRunner = runner.next;
        temp = runner;
        while(secondRunner){
            // console.log(`-looking at ${secondRunner.val}`)
            if(runner.val === secondRunner.val){
                // console.log('Found duplicate');
                temp.next = secondRunner.next;
            }
            temp = secondRunner;
            secondRunner = secondRunner.next;
        }
        runner = runner.next;
    }
    return 0;
}

var slist = { head: null };
addBack(slist,3);
addBack(slist,4);
addBack(slist,9);
addBack(slist,15);
addBack(slist,4);
addBack(slist,11);
addBack(slist,4);
addBack(slist,13);
addBack(slist,13);

console.log(displayList(slist));
dedupe(slist);
console.log(displayList(slist));

//Dedupe Slist without buffer