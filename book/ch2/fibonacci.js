// fibonacci
function fib(num){
    var index = 0;
    var first = 0;
    var second = 1;
    var temp = 0;
    //console.log(first + " - " + second);
    if(num === 0){
        console.log(num + ": " + (second + first));
    } else if (num === 1){
        console.log(num + ": " + (second));
    } else {
        while(index < num - 1){
            temp = second;
            second = first + second;
            first = temp;
            index++;
        }
        console.log(num + ": " + second);
    }
}

fib(0);
fib(1);
fib(2);
fib(3);
fib(4);
fib(5);
fib(6);
fib(7);
