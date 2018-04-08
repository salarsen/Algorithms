function ListNode(val){
   this.val = val;
   this.nextNode = null;
}

function slist(){
   this.head = null;

   this.addNode = function(val){
      var newItem = new ListNode(val);
      if(!this.head){
         this.head = newItem;
      } else {
         var runner = this.head;
         while(runner.nextNode){
            runner = runner.nextNode;
         }
         runner.nextNode = newItem;
      }
      return this;
   }
   this.addFront = function(val){
      var newNode = new ListNode(val);
      newNode.nextNode = this.head;
      this.head = newNode;
      return this;
   }
   this.removeFront = function(val){
      if(this.head){
         this.head = this.head.nextNode;
      }
      return this;
   }
   this.display = function(){
      var displayStr = "";
      if(this.head){
         var runner = this.head;

         while(runner){
            if(runner.nextNode){
               displayStr = displayStr + runner.val + ", ";
            } else {
               displayStr = displayStr + runner.val;
            }
            runner = runner.nextNode;
         }
         console.log(displayStr);
      } else {
         console.log('Empty list');
      }
      return this;
   }
   this.length = function(){
      var length = 0;
      var runner = this.head;
      while(runner){
         length++;
         runner = runner.nextNode;
      }
      console.log('Length:',length);
      return this;
   }
   this.front = function(){
      if(!this.head){
         console.log(false);
      } else {
         console.log('Front:',this.head.val);
      }
      return this;
   }
   this.back = function(){
      var runner = this.head;
      while(runner.nextNode){
         runner = runner.nextNode;
      }
      console.log('Back:',runner.val);
      return this;
   }
   this.max = function(){
      if(this.head){
         var runner = this.head;
         var max = runner.val;
         while(runner){
            if(runner.val > max){
               max = runner.val;
            }
            runner = runner.nextNode;
         }
         console.log('Max:',max);
      } else {
         //default
         console.log('Max: 0');
      }
      return this;
   }
   this.min = function(){
      if(this.head){
         var runner = this.head;
         var min = runner.val;
         while(runner){
            if(runner.val < min){
               min = runner.val;
            }
            runner = runner.nextNode;
         }
         console.log('Min:',min);
      } else {
         //default
         console.log('Min: 0');
      }
      return this;
   }
   this.removeBack = function(){
      if(this.head){
         var runner = this.head;
         while(runner.nextNode.nextNode !== null){
            runner = runner.nextNode;
         }
         runner.nextNode = null;
      }
      return this;
   }
   this.average = function(){
      if(this.head){
         var runner = this.head;
         var sum = 0;
         var count = 0;
         while(runner){
            sum += runner.val;
            count++;
            runner = runner.nextNode;
         }
         console.log('Average:',sum/count);
      } else {
         console.log('Average 0');
      }
   }
   this.maxToBack = function(){
      var runner = this.head;
      if(runner){
         var max = runner.val;

         //first find max value
         while(runner){
            if(runner.val > max){
               max = runner.val;
            }
            runner = runner.nextNode;
         }

         //reset to beginning and find the max node then remove it and add to back
         runner = this.head;
         while(runner.nextNode){
            if(runner.nextNode.val === max){
               runner.nextNode = runner.nextNode.nextNode;
            }
            runner = runner.nextNode
         }
         var obj = new ListNode(max);
         runner.nextNode = obj;
      }
      return this;
   }
   this.moveMinFront = function(){
      var runner = this.head;
      if(runner){
         var min = runner.val;
         while(runner){
            if(runner.val < min){
               min = runner.val;
            }
            runner = runner.nextNode;
         }

         runner = this.head;
         while(runner.nextNode){
            if(runner.nextNode.val === min){
               runner.nextNode = runner.nextNode.nextNode;
            }
            runner = runner.nextNode;
         }

         var obj = new ListNode(min);
         obj.nextNode = this.head;
         this.head = obj;
      }
      return this;
   }
   this.prependVal = function(val, before){
      var runner = this.head;
      if(!runner){
         runner = new ListNode(val);
      } else if(runner.val === before){
         console.log('found',before);
         var newHead = new ListNode(val);
         newHead.nextNode = runner;
         this.head = newHead;
         this.display();
      } else {
         console.log('looping');
         var temp = new ListNode(val);
         var found = false;
         while(runner.nextNode){
            if(runner.nextNode.val === before){
               found = true;
               temp.nextNode = runner.nextNode;
               runner.nextNode = temp;
               break;
            }
            runner = runner.nextNode;
         }
         if(!found){
            runner.nextNode = temp;
         }
      }
      return this;
   }
   this.appendVal = function(val, after){
      console.log('append');
      var newNode = new ListNode(val);
      if(!this.head){
         this.head = newNode;
      } else if (this.head.val === after){
         this.head.nextNode = newNode;
      } else {
         var runner = this.head;
         var found = false;
         while(runner.nextNode){
            if(runner.val === after){
               found = true;
               newNode.nextNode = runner.nextNode;
               runner.nextNode = newNode;
               break;
            }
            runner = runner.nextNode;
         }
         if(!found){
            runner.nextNode = newNode;
         }
      }
      return this;
   }
   this.removeVal = function(val){
      if(!this.head){
         console.log('not found');
      } else if(this.head.val === val){
         this.head = this.head.nextNode;
      } else {
         var runner = this.head;
         while(runner.nextNode){
            if(runner.nextNode.val === val){
               runner.nextNode = runner.nextNode.nextNode;
               break;
            }
            runner = runner.nextNode;
         }
      }
      return this;
   }
   this.splitOnVal = function(val){
      //list empty return null
      //first element return current list
      //else find spot
      if(!this.head){
         return null;
      } else if(this.head.val === val){
         return this.head;
      } else {
         var runner = this.head;
         var found = false;
         while(runner.nextNode){
            if(runner.nextNode.val === val){
               found = true;
               var newlist = new slist();
               newlist.head = runner.nextNode;
               runner.nextNode = null;
               return newlist;
            }
            runner = runner.nextNode;
         }
         if(!found){
            return null;
         }
      }
      return this;
   }
   this.removeNegatives = function(){
      if(!this.head){
         return null;
      } else {
         // while(this.head.val < 0){
         //    this.head = this.head.nextNode;
         // }
         var runner = this.head;
         var newList = new slist();
         while(runner.nextNode){
            if(runner.val >= 0){
               newList.addNode(runner.val);
            }
            runner = runner.nextNode;
         }
         return newList;
      }
      return this;
   }
   this.concatList = function(second){
      if(!this.head){
         return second;
      } else if (!this.head.nextNode){
         this.head.nextNode = second.head;
      } else {
         var runner = this.head;
         while(runner.nextNode){
            runner = runner.nextNode;
         }
         runner.nextNode = second.head;
      }
      return this;
   }
   this.partition = function(value){
      if(!this.head){
         return null;
      } else {
         var runner = this.head;
         var before = null;
         var before_runner = null;
         var after = null;
         var after_runner = null;
         var runner_found = false;
         while(runner){
            if (runner.val < value){
               // console.log(runner.val,'is less than',value);
               if(before){
                  before_runner.nextNode = runner;
                  before_runner = before_runner.nextNode;
                  before_runner.nextNode = null;
               } else {
                  before = runner;
                  before_runner = before;
               }
            } else if (runner.val > value){
               // console.log(runner.val,'is greater than',value);
               if(after){
                  after_runner.nextNode = runner;
                  after_runner = after_runner.nextNode;
                  // after_runner.nextNode = null;
               } else {
                  after = runner;
                  after_runner = after;
               }
            } else if (runner.val === value){
               runner_found = true;
            }
            runner = runner.nextNode;
         }
         // before_runner = after;
         // console.log('before runner',before_runner);
         after_runner.nextNode = null;
         if(runner_found){
            before_runner.nextNode = new ListNode(value);
            before_runner = before_runner.nextNode;
         } else {
            console.log('Did not find value in list');
         }
         before_runner.nextNode = after;
         this.head = before;
      }
      return this;
   }
   this.secondToLast = function(){
      if(!this.head || !this.head.nextNode){
         return null;
      } else if (this.head.nextNode.nextNode === null){
         return this.head.val;
      } else {
         var runner = this.head;
         while(runner.nextNode.nextNode){
            runner = runner.nextNode;
         }
         return runner.val;
      }
      return this;
   }
   this.copyList = function(){
      var newList = new slist();
      var runner = this.head;
      while(runner){
         newList.addNode(runner.val);
         runner = runner.nextNode;
      }
      return newList;
   }
   this.filterList = function(low, high){
      if(!this.head){
         return null;
      } else {
         var runner = this.head;
         while(runner){
            if(runner.val < low || runner.val > high){
               this.removeVal(runner.val);
            }
            runner = runner.nextNode;
         }
      }
      return this;
   }
   this.secondLargest = function(){
      if(!this.head || !this.head.nextNode){ // first and second value are empty
         return null;
      } else {
         var runner = this.head;
         var largest;
         var secondLargest;
         // populate initial values
         if(runner.val > runner.nextNode.val){
            // console.log(); = runner.val;
            secondLargest = runner.nextNode.val;
         } else {
            largest = runner.nextNode.val;
            secondLargest = runner.val;
         }
         // console.log('set largest to',largest,' and second largest to',secondLargest);
         runner = runner.nextNode.nextNode;
         // console.log(runner);
         while(runner){
            if(runner.val > largest){
               secondLargest = largest;
               largest = runner.val;
            } else if (runner.val < largest && runner.val > secondLargest){
               secondLargest = runner.val;
            }
            runner = runner.nextNode;
         }
         console.log("Second Largest",secondLargest);
         return secondLargest;
      }
   }
   this.dedupeList = function(){
      if(!this.head){
         return null;
      } else if (!this.head.nextNode){
         return this;
      } else {
         var mainList = this.head;
         var runner = null;
         // console.log(runner);

         while(mainList){
            // console.log('searching',mainList.val);
            runner = mainList.nextNode;
            // console.log(runner);
            while(runner && runner.nextNode){
               if(runner.nextNode.val === mainList.val){
                  runner.nextNode = runner.nextNode.nextNode;
               }
               runner = runner.nextNode;
            }
            mainList = mainList.nextNode;
         }
      }
      return this;
   }
   this.containsVal = function(val){
       console.log('running contains val');
       var runner = this.head;
       while(runner){
          if(runner.val === val) return true;
           runner = runner.nextNode;
       }
       return false;
   }
}
function zipList(list1, list2){
   if(!list1.head || !list2.head){
      return null;
   } else {
      var newList = list1.head;
      var newlist_runner = newList.nextNode;
      var list1_runner = newList;
      var list2_runner = list2.head;
      while(list1_runner.nextNode && list2_runner.nextNode){
         newlist_runner.nextNode = list2_runner;
         newlist_runner = newlist_runner.nextNode;
         newlist_runner.nextNode = list1_runner;
         newlist_runner = newlist_runner.nextNode;
         list2_runner = list2_runner.nextNode;
         list1_runner = list1_runner.nextNode;
      }
      if(list1_runner && !list2_runner){
         newlist_runner.nextNode = list1_runner;
      } else if(!list1_runner && list2_runner){
         newlist_runner.nextNode = list2_runner;
      }
      return newList;
   }
}
//
// var ourList = new slist();
// ourList.addNode(5);
// ourList.display().removeVal(5).removeVal(3).display();
// ourList.removeFront();
// ourList.display().addNode(5);
// ourList.prependVal(3, 4).display();
// // ourList.prependVal(2,5);
// // console.log(ourList);
// ourList.addNode(5).addNode(10).addNode(-5).addNode(20).addNode(12);
// ourList.length();
// ourList.display().front().max().min();
// ourList.display().removeBack().display().addNode(13).display().average();
// ourList.back();
// ourList.maxToBack().display().moveMinFront().display().addFront(1).display().removeFront().display().appendVal(21,3).display().removeVal(5).removeVal(10).display();
// var newList = ourList.splitOnVal(21);
// newList.display();
// ourList.display();
// ourList.addFront(-4).addNode(-2).addNode(-7).display();
// newList = ourList.removeNegatives();
// newList.display();
// console.log('***********');
// ourList.display();
// console.log(ourList.secondToLast());
// var veryNewList = new slist();
// console.log(veryNewList.secondToLast());
// veryNewList.addNode(5);
// console.log(veryNewList.secondToLast());
// veryNewList.addNode(5);
// console.log(veryNewList.secondToLast());
// var newNewList = ourList.copyList();
// newNewList.display();
// newNewList.filterList(-4,-2).display();
// newList.concatList(ourList).display();
// var newList = new slist();
// newList.addNode(3).addNode(5); //.addNode(-3).addNode(0).addNode(1).display().partition(2).display().addNode(10).addNode(6);
// console.log(newList.secondLargest());
// var dedupeList = new slist();
// dedupeList.addNode(3).addNode(5).addNode(2).addNode(5).addNode(3).display().dedupeList().display();
// dedupeList.addNode(5).addNode(4).addNode(3).display().dedupeList().display();

// newList.display().secondLargest();

var list1 = new slist();
list1.addNode(1).addNode(3).addNode(5).addNode(7).display();
list1.display();
console.log(list1.containsVal(3));
// var list2 = new slist();
// list2.addNode(2).addNode(4).addNode(6).addNode(8).display();
// // var newList = zipList(list1,list2);
