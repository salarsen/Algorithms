var pages = [1,13,14,15,37,38,70];
// return string "1, 13-15, 37-38, 70"
console.log(bookIndex(pages));
function bookIndex(arr){
    var index_str = "";
    var start_page = [];
    for(var i = 0; i < arr.length; i++){
        if(i+1 != arr.length){
            if(arr[i] + 1 == arr[i + 1]){
                start_page.push(arr[i]);
            } else{
                if (start_page.length != 0){
                    index_str = index_str + start_page[0] + "-" + arr[i] + ", ";
                    start_page = [];
                } else {
                    index_str = index_str + arr[i] + ", ";
                }
            }
        } else if (i == arr.length - 1){
            index_str = index_str + arr[i];
        }
    }
    return index_str;
}
