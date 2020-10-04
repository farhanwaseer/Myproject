
let myObj1 = {
    firstName : 'Farhan'
}

let myObj2 = {
    lname : 'Ahmed'
}

/*
let final = {
    ...myObj1,
    ...myObj2
}

final.lname = 'Waseer'

console.log(myObj2)
console.log(final);
*/

 let anotherobj = Object.assign({}, myObj1, myObj2);
 anotherobj.firstName = 'Waseer';
 
 console.log(myObj1);
 console.log(anotherobj)