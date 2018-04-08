birthday(2,8);
birthday(8,2);
birthday(1,8);
function birthday(num1, num2){
    if((num1 == 2 && num2 == 8) || (num1 == 8 && num2 == 2)){
        console.log("How did you know?");
    } else {
        console.log("Just another day...");
    }
}
