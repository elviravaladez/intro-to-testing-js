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
    if(typeof input === "undefined") {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}