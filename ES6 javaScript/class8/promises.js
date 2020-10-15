const posts = [
    { title: 'Post one ', body: 'This is post one ' },
    { title: 'Post two', body: 'This is post two' }
];

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach(post => {
            output += `<li>${post.title} ${post.body} </li>`
            document.body.innerHTML = output;
        })
    }, 2000)


}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve(10);
            } else {
                reject('Error: something went wrong')
            }
        }, 2000);
    });
}


// async / await 
 
async function init() {
    await createPost({ title: 'Post three', body: 'This is post three' });

    getPosts();
}

init();
// const promise1 = Promise.resolve('Hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => 
//  setTimeout(resolve, 200, "Good Bye"));

//  const promise4 = fetch ('https://jsonplaceholder.typicode.com/users').then(res => res.json()
//  );
//  Promise.all([promise1, promise2, promise3])
//  .then(values => console.log(values));

// createPost({ title: 'Post three', body: 'This is post three' })
//     .then((val) => {
//         getPosts();
//         return val;
//     })
//     .then((val) => val * 10)
//     .then((val) => console.log(val))
//     .catch(err => console.log(err));


// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => {
//     console.log(response.json())
// })
// .catch(err => console.log(err));
