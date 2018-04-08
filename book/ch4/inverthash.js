var hash = {"name":"Zaphod", "charm":"high", "morals":"dicey"};
var newhash = {};
for (var key in hash){
    newhash[hash[key]] = key;
}
console.log(newhash);
