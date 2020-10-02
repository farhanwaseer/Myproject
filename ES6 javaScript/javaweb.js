// alert("Farhan");

// let someVar = "farhan";
// var times = 4;
// if (times > 3){
    // let someVar = "Waseer"
    // console.log("In side the block: ", someVar);
// };
// console.log("outside: " + someVar );

// { topic 2

// for(var i=0; i < 5; i++) {
//    console.log(`Inside the loop : ${i}`);
// }
// console.log(`outside the loop : ${i}`);

// var counter = 0;
// console.log(window.counter);

// let counter = 12;
// console.log(window.counter);

// #3: Redeclaration

// var counter = 12;
// var counter;
// console.log(counter);// no error

// let count = 12;
// let count;
// console.log(count); error

// #4: The Temporal dead zone

// { last topic cover Differences Between var and let}

function add(x,y){
    return x + y
}

console.log(add(22,44));
