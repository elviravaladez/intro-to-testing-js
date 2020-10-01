// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


// sayHello function
// function sayHello(input) {
//     if(input === "Alex") {
//         return "Hello, Alex!";
//     } else if(input === "Pat") {
//         return "Hello, Pat!";
//     } else {
//         return "Hello, Jane!";
//     }
// }

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