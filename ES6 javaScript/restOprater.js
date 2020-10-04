let obj1 = {
    fname :'Farhan',
    lname : 'Waseer',
    city : 'Sukkur'
} 

console.log(obj1)

let {fname, ...restValues} = obj1;

console.log(fname, restValues)


