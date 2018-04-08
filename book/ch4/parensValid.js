var a = "Y(3(p)p(3)r)s";
var b = "N(0(p)3";
var c = "N(0)t )0 (k";

console.log(parensValid(a));
console.log(parensValid(b));
console.log(parensValid(c));
function parensValid(str){
    var arr = str.split("");
    // var valid = true;
    var pairs_cnt = 0;
    for(var i = 0; i < arr.length;i++){
        if(arr[i] == "(" && pairs_cnt >= 0){
            pairs_cnt++;
        } else if (arr[i] == ")"){
            pairs_cnt--;
        }
    }
    if (pairs_cnt == 0)
        return true;
    else
        return false;
}
