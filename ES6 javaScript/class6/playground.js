const name = "Farhan";

setTimeout(() =>console.log('this is the set time out'), 2000)


fetch('https://jsonplaceholder.typicode.com/todos/2')
.then(response => response.json())
.then(data => console.log(data))
.catch(err => console.log(err));


console.log(name)