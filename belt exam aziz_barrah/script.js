function hide(element) {
    element.remove();
    
}
function increment() {
    const numberElement = document.getElementById("pepper");
    let number = parseInt(numberElement.innerText);
    number++;
    numberElement.innerText = number;
}
function increment1() {
    const numberElement = document.getElementById("Bruce");
    let number = parseInt(numberElement.innerText);
    number++;
    numberElement.innerText = number;
}
function increment2() {
    const numberElement = document.getElementById("Oscar");
    let number = parseInt(numberElement.innerText);
    number++;
    numberElement.innerText = number;
}

function chooseLunch(element) {
    alert("You are looking for " + element.value);
}

