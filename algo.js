function d6() {
    var roll = Math.random();
    // your code here
roll = roll* 5 + 1
roll = Math.ceil(roll)
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

var roll = 5.6666
console.log(Math.ceil(roll));
console.log(Math.floor(roll));
