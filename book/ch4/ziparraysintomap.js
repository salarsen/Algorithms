var arr1 = ["abc",3,"yo"];
var arr2 = [42, "wassup",true];
var obj = {};
for(var i = 0; i < arr1.length; i++){
    // console.log(arr1[i] + " - " + arr2[i]);
    obj[arr1[i]] = arr2[i];
}
console.log(obj);
console.log(obj.abc)
console.log(obj[3]);
