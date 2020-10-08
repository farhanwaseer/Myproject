const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post two', body: 'This is post two'}
];

function getPost() {
    let output = '';
    setTimeout(() => {
        posts.forEach(post =>  {
            output += `<li>${post.title}</li>`
            document.body.innerHTML = output; 
        })
    }, 2000)
}

getPost