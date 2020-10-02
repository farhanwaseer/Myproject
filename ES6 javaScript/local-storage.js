localStorage.setItem('firstName', 'Farhan');
localStorage.setItem('lastName', 'Waseer');

let myobj = {
    name : 'Farhan',
    cast : 'Waseer',
    age  : 20 ,
    city : 'Sukkur'
};


let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');

localStorage.setItem('myobj', JSON.stringify(myobj));




localStorage.removeItem('user')
// localStorage.clear();