// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(input) {
    if(typeof input === "undefined" || typeof input === "boolean") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return typeof input === "boolean" || input === 5;
}


function isEven(input) {
    if(typeof input  === "boolean" || Number(input) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}