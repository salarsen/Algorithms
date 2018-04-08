//Divide and Conquery challenges

//reverse array
// console.log(revArr([3,1,6,4,2]));
// function revArr(arr){
//     var temp = 0;
//     for(var i = 0; i < arr.length/2; i++){
//         temp = arr[i];
//         arr[i] = arr[arr.length - 1 - i];
//         arr[arr.length - 1 - i] = temp;
//     }
//     return arr;
// }

//remove negatives
// console.log(removeNegs([2,-1,4,-2,5]));
// function removeNegs(arr){
//     var new_arr = [];
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] >= 0){
//             new_arr.push(arr[i]);
//         }
//     }
//     return new_arr;
// }

//array min to front
// console.log(minToFront([4,3,1,5,6]));
// function minToFront(arr){
//     var min = arr[0];
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             arr[0] = arr[i];
//             arr[i] = min;
//             min = arr[0];
//         }
//     }
//     return arr;
// }

//skyline heights
// console.log(skylineHeights([1,-1,7,3]));
// function skylineHeights(arr){
//     var new_arr = [];
//     var prev = arr[0];
//     new_arr.push(prev); //we assume we will always see the first building
//     for(var i = 1; i < arr.length; i++){
//         if(arr[i] > prev){
//             prev = arr[i];
//             new_arr.push(prev);
//         }
//     }
//     return new_arr;
// }
