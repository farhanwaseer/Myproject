// const getPosts = async () => {

//     try {
      
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data =  await response.json();
//     console.log('response ===>', data);

//     } catch(error) { 
//         console.log('Something went wronggggg !!!') 

//     }
     
// }

// getPosts();

const getPosts = async () => {

const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log('response ==>', data);


}

getPosts();