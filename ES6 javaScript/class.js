// alert("Farhan");

 let someVar = "farhan";
var times = 4;
if (times > 3){
    let someVar = "Waseer"
    console.log("In side the block: ", someVar);
};
console.log("outside: " + someVar );

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

const obj = {
    Name: 'Farhan',
    LastName: 'Waseer',
    Age: 20,
    profession: {
        one: 'React',
        two: 'NodeJs'
    },
};

console.log(obj)

console.log(obj.Name)
console.log(obj.profession.two)

 
 const {LastName, profession,profession: {one , two}} = obj;
 console.log(one, two, profession )

//  Arry

const Arry = ['Farhan', 'Waseer', 20];
const [firstname, lastname, age] = Arry;

console.log(firstname)
console.log(lastname)
console.log(age)

/// Class 3, 4sep 
 
// Perimative data type
// const a = 'waseer';
// const b = 'waseer';
// console.log(a === b)


// ternary oprater

// const a = 10;
// const b = 20;
// ES6
// a < b ? console.log('If is Running') : console.log('Else is running') ;

// old
// if(a < b){
//     console.log("If is Running")
// }
// else{
//     console.log("Else is Running")
// }

// NESTED TERNARY 
const a = 10;
const b = 20;

a < b ? 
     a === 10 ? console.log('Nested True is running') 
      : console.log('Nested False is running') 
           : console.log('Parent False is running');
     
