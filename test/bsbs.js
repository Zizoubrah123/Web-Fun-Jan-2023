// function example(element) {
//     console.log("element clicked", element);
// }


// function turnOff(element) {
//     element.innerText = "Off";
// }

// function hide(element) {
//     element.remove();
// }
 

// function over(element) {
//     alert("mouseover");    
// }
    
// function out(element) {
//     alert("mouseout");    
// }

// function over(element) {
//     element.style.backgroundColor = "lime";    
// }
    
// function out(element) {
//     element.style.backgroundColor = "silver";   
// }
// ---------------------------------------------------------
// function increment() {
//   const numberElement = document.getElementById("psspss");
//   let number = parseInt(numberElement.innerText);
//   number++;
//   numberElement.innerText = number;
// }

// var h3 = document.querySelector("h3");
// h3.innerText = "New Title";


// var taco1 = {
//     "tortilla": "soft corn tortilla",
//     "protein":  "tinga chicken",
//     "cheese":   "cotija cheese",
//     "toppings": ["lettuce", "pico de gallo", "guacamole"],
//     "tacoInfo": function() {
//         console.log("Tortilla: " + taco1.tortilla);
//         console.log("Protein:  " + taco1.protein);
//         console.log("Cheese:   " + taco1.cheese);
//         console.log("Toppings: " + taco1.toppings);
//     }
// }
    
// // we can now get all the delicious taco facts by
// taco1.tacoInfo(); // note we call this like a function because it is a function

function sandwichFactory(bread, protein, cheese, toppings) {
    var sandwich = {};
    sandwich.bread = bread;
    sandwich.protein = protein;
    sandwich.cheese = cheese;
    sandwich.toppings = toppings;
    return sandwich;
}
    
var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
console.log(s1);




