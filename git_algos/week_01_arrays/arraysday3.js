//Arrays Day 3
//array rotate
// console.log(rotateArr([1,2,3],-2));
// function rotateArr(arr,shiftBy){
//     var shiftact = 0;
//     if(shiftBy > 0){
//         shiftact = shiftBy % arr.length;
//     } else if (shiftBy < 0){
//         shiftact = arr.length - (Math.abs(shiftBy) % arr.length);
//     }
//     console.log(shiftact);
//     if(shiftact === 0){
//         return arr;
//     } else {
//         var temp = 0;
//         for(var i = 0; i < shiftact; i++){
//             for(var x = arr.length - 1; x > 0; x--){
//                 if(x === arr.length - 1){
//                     temp = arr[x];
//                 }
//                 arr[x] = arr[x-1];
//             }
//             arr[0] = temp;
//         }
//         return arr;
//     }
// }

//array filter range (does not maintain order)
//console.log(filterRange([1,2,3,4,5],2,4));
// console.log(filterRange([2,5,3,1,0,6,3,8,4,9],2,4));
// function filterRange(arr,min,max){
//     var index = 0;
//     while(index < arr.length){
//         if(arr[index] < min || arr[index] > max){
//             arr[index] = arr[arr.length - 1];
//             arr.pop();
//         } else {
//             index++;
//         }
//         console.log(arr);
//     }
//     return arr;
// }

//array filter - maintain order
// console.log(filterRange([1,2,3,4,5],2,4));
// console.log(filterRange([2,5,3,1,0,6,3,8,4,9],2,4));
// function filterRange(arr,min,max){
//     var index = 0;
//     while(index < arr.length){
//         if(arr[index] < min || arr[index] > max){ //lets shift everything down and pop the last
//             for (var i = index; i < arr.length - 1; i++){
//                 arr[i] = arr[i+1];
//
//                 //console.log(arr);
//             }
//             arr.pop();
//         } else {
//             index++;
//         }
//     }
//     return arr;
// }

// // Array concat
// console.log(arrayConcat(['a','b'],[1,2]));
// function arrayConcat(arr1, arr2){
//     var new_arr = [];
//     for(var i = 0; i < arr1.length; i++){
//         new_arr.push(arr1[i]);
//     }
//     for(var i = 0; i < arr2.length; i++){
//         new_arr.push(arr2[i]);
//     }
//     return new_arr;
// }
