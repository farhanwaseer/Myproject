// type conversion
console.log('welcome');
let myVar;

console.log('We are at tut6')
 
let html;

html = "<h1> this is heading </h1>" + 
        "<p> this is my para </p>";

 html = html.concat('this', ' str2');

 console.log(html);

 let fruit1 = 'Orange\'';

 let fruit2 = 'Apple';

 let myHtml = `Hello 
               <h1> this is "my" heading <h1>
               <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;             












//  
  myVar = String(34);
//  // console.log(myVar, (typeof myVar));
//  
  let booleanVar = String(true);
//  console.log(booleanVar , (typeof booleanVar));
//  
  let date = String(new Date());
//  console.log(date , (typeof date));
//  
  let arr = String([1,2,3,4,5]);
//  console.log(arr.length, (typeof arr));
//  
  let i = 43;
//  
//  console.log(i);
//  
  let number = parseFloat('33.32');
//  console.log(number.toFixed(1), (typeof number));
//  
  let user = 'john'
//    , age = 23
//    , message = 'Hello';
//  
//    console.log(user, age , message);
//    
  let  name = "john";
//  
//  console.log(`Hello, ${name}!`);
//  
//  console.log(`the result is ${1 + 2}`);

 /*   let year = prompt('In which year was ECMAScript-2015 specification published?');
    
    if(year === "2015") {
        alert(" thats correct");
        alert("you are so smart");
    }
    else {
        alert('wrong');
    }
*/




