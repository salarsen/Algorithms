// console.clear();
function avg(arr){
   if(!Array.isArray(arr)){
      return false;
   }

   var sum = 0;

   for(var idx = 0; idx < arr.length; idx++){
      sum += arr[idx];
   }

   return sum/arr.length;
}

function isBalanced(arr){
   if(!Array.isArray(arr)){
      return false;
   }

   var sum1 = 0;
   var sum2 = 0;

   for(var i = 0; i < arr.length/2; i++){
      sum1+= arr[i];
      sum2+= arr[arr.length-1-i];
   }
   return (sum1===sum2)
}

console.log(isBalanced([4,5,3,5,4]));
