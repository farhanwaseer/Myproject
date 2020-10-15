const posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'}
]


function getPosts() {

    let output = '';
    setTimeout(() => {
        posts.forEach((post) => {
            output += `<li>${post.title} ${post.body}</li>
            <h1>Farhan Waseer</h1>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}




function createPost(post, callback) {
    setTimeout((abc) => {
          
        posts.push(post);
        callback();
    },2000 );
}


createPost({title: 'Post three', body: 'This is post three' }, getPosts);





