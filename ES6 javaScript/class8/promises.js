/*const posts = [
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

getPosts();



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

createPost({ title: 'Post three', body: 'This is post three' })
    .then((val) => {
        getPosts();
        return val;
    })
    .then((val) => val * 10)
    .then((val) => console.log(val))
    .catch(err => console.log(err));

*/
const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
]

function getPosts() {

    let output = '';
    setTimeout(() => {

        posts.forEach((post, index) => {
            output += `<li>${post.title} ${post.body}</li>
            <h1>Farhan Waseer</h1>`;
            document.body.innerHTML = output;
        });
    }, 1000);
}



function createPost(post) {
      return new Promise((resolve, reject) => {
        setTimeout((abc) => {

            posts.push(post);

            const error = false; 

            if (!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
            
        }, 2000);
      })
    
}

createPost({title: 'Post three', body: 'This is post three' })
.then(getPosts)

