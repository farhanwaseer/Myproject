let myObj = {
    name: 'Farhan',
    lastName: 'Waseer',
    city: 'Sukkur',
    address: {
        address1 : 'sukkur1'
    }
}

console.log(myObj)

let objectkey = Object.keys(myObj);

console.log(objectkey);

for(let i = 0; i < objectkey.length; i++) {
    console.log(i, myObj[objectkey[i]])
    
}