const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPosts() {
    let output = '';
    setTimeout(() => {
        posts.forEach(post =>  {
            output += `<li>${post.title}</li>
            <h1>FARHAN WASEER</h1>`
            document.body.innerHTML = output; 
        })
    }, 2000)
}

getPosts();

function createPost(post, callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}

createPost({title: 'Post three' , body: 'This is post three'}, getPosts);


