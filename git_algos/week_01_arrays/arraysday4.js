//remove negatives
// console.log(removeNegs([2,-1,4,-2,5]));
// function removeNegs(arr){
//     var popcnt = 0;
//     var temp = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] < 0){
//             if(arr[arr.length - 1] >= 0){
//                 arr[i] = arr[arr.length - 1];
//             }
//             arr.pop();
//         }
//     }
//     return arr;
// }

//second to last
// console.log(secondToLast([42,true,4,"Liam",7]));
// console.log(secondToLast([42]));
// function secondToLast(arr){
//     if(arr.length < 2){
//         return null;
//     } else{
//         return arr[arr.length - 2];
//     }
// }

//nth to last
// console.log(nthToLast([5,2,3,6,4,9,7],3));
// function nthToLast(arr,index){
//     if (arr.length < index){
//         return null;
//     } else {
//         return arr[arr.length - index];
//     }
// }

// second largest
// console.log(secondLargest([42,4,1,Math.PI,7]));
// function secondLargest(arr){
//     //find largest first
//     var largest = 0;
//     var secondlargest = 0;
//     if(arr.length < 2){
//         return null;
//     } else{
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i] > largest && arr[i] > secondlargest){
//                 secondlargest = largest;
//                 largest = arr[i];
//             }else if(arr[i] < largest && secondlargest < arr[i]){
//                 secondlargest = arr[i];
//             }
//         }
//         return secondlargest;
//     }
// }
//
//nth largest
// console.log(nthLargest([42,4,1,Math.PI,7],3));
// function nthLargest(arr,nth){
//     var findlvl = 0;
//     var largest = 0;
//     var nthvalue = 0;
//     while(findlvl != nth){
//         for(var i = 0; i < arr.length; i++){
//             if(arr[i] < largest && arr[i] > nthvalue){
//                 nthvalue = largest;
//                 largest = arr[i];
//             } else if (arr[i] < largest && nthvalue < arr[i]){
//                 nthvalue = arr[i];
//             }
//         }
//         console.log("findlvl " + findlvl);
//         console.log("largest " + largest);
//         console.log("nth " + nthvalue);
//         findlvl++;
//         console.log("findlvl " + findlvl);
//     }
//     return nthvalue;
// }
