// Shuffle
//
// Recreate the shuffle(arr) function built into JavaScript, to efficiently shuffle a given array’s values. Work in-place, of course. Do you need to return anything from your function?
// a = [20,30,40,50,60,70];
// console.log(a);
// shuffleArr(a);
// console.log(a);
// function shuffleArr(arr){
//     var newpos = 0;
//     var temp = 0;
//     for(var i = 0; i < arr.length; i++){
//         newpos = Math.trunc(Math.random()*(arr.length - 1));
//         temp = arr[i];
//         arr[i] = arr[newpos];
//         arr[newpos] = temp;
//     }
// }
//
// Remove array
//
// Given array, and indices start and end, remove vals in that index range, working in-place (hence shortening the array). Given ([20,30,40,50,60,70],2,4), change to [20,30,70] and return it.
// a = [20,30,40,50,60,70];
// removeArray(a,2,4);
// console.log(a);
// function removeArray(arr,start,stop){
//     console.log("Remove values from " + arr[start] + " to " + arr[stop]);
//     while(start - 1 != stop){
//         //shift values left
//         for(var i = start; i < arr.length - 1; i++){
//             arr[i] = arr[i + 1];
//         }
//         arr.pop();
//         stop--;
//     }
//     //console.log(arr);
// }

// Intermediate Sums
//
// You will be given an array of numbers. After every tenth element, add an additional element containing the sum of those ten values. If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums. Given the array [1,2,1,2,1,2,1,2,1,2,1,2,1,2], change it to [1,2,1,2,1,2,1,2,1,2,15,1,2,1,2,6].
//
// a = [1,2,1,2,1,2,1,2,1,2,1,2,1,2];
// intermedSums(a);
// function intermedSums(arr){
//     var sum = 0;
//     console.log(arr);
//     for(var i = 0; i < arr.length; i++){
//         if((i + 1) % 10 === 0){
//             //add last value
//             sum += arr[i];
//             arr.length = arr.length + 1;
//             //shift remaining if not at end of array
//             for(var x = arr.length - 1; x > i + 1; x--){
//                  arr[x] = arr[x - 1];
//             }
//             //set new value in list
//             arr[i+1] = sum;
//             sum = 0;
//             i++;
//         } else {
//             sum += arr[i];
//         }
//     }
//     if((i + 1) % 10 !== 0){
//         arr.length = arr.length + 1;
//         arr[i] = sum;
//     }
//     console.log(arr);
// }

// Double Trouble
//
// Create a function that changes a given array to list each existing element twice, retaining original order. Convert [4,"Ulysses",42,false] to [4,4,"Ulysses","Ulysses",42,42,false,false].
// a = [4,"Ulysses",42,false];
// doubleTrouble(a);
// function doubleTrouble(arr){
//     arr.length = arr.length * 2;
//     console.log(arr.length);
//     for(var i = (arr.length/2) - 1; i >= 0; i--){
//         //shift value
//         arr[i*2] = arr[i];
//         //duplicate value
//         arr[(i*2) + 1] = arr[i];
//     }
//     console.log(arr);
// }

// Zip it
//
// Create a standalone function that accepts two arrays and combines their values sequentially into the first array, at alternating indices starting with the first array. Extra values from either array should be included afterward. Given [1,2] and [10,20,30,40], change first array to [1,10,2,20,30,40].
// a = [1,2,3];
// b = [10,20,30,40];
// // zipIt_new(a,b);
// zipIt(a,b);
// console.log(a);
// function zipIt_new(arr1, arr2){
//     var delta = Math.abs(arr1.length - arr2.length);
//     var index = 0;
//     if (arr1.length > arr2.length){
//         index = arr2.length;
//     } else {
//         index = arr1.length;
//     }
//     var new_arr = [];
//     for(var i = 0; i < index; i++){
//         new_arr.push(arr1[i]);
//         new_arr.push(arr2[i]);
//     }
//     for(var i = index; i < index + delta; i++){
//         if(arr1[i])
//             new_arr.push(arr2[i]);
//         else if (arr2[i])
//             new_arr.push(arr2[i]);
//     }
//     console.log(new_arr);
// }
// function zipIt(arr1, arr2){
//     arr1.length = arr1.length + arr2.length;
//     //shift
//     for(var i = arr1.length - arr2.length - 1; i > 0; i--){
//         arr1[2 * i] = arr1[i];
//         delete arr1[i];
//     }
//     var index = 0;
//     for(var i = 1; i < arr1.length; i++){
//         if(!arr1[i]){
//             arr1[i] = arr2[index];
//             index++;
//         }
//     }
// }
