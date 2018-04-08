// claire is where?
function reset(){
    position.x = 0;
    position.y = 0;
}

function moveBy(x,y){
    position.x = position.x + x;
    position.y = position.y + y;
}

function xLocation(){
    console.log(position.x);
}

function yLocation(){
    console.log(position.y);
}

position = {
    x : 0,
    y : 0,
}

reset();
moveBy(1,-2);
moveBy(3,1);
xLocation();
yLocation();

function distFromHome(){
    console.log(Math.sqrt((position.x^2)+(position.y^2)));
}

distFromHome();
