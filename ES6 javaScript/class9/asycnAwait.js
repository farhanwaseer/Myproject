const getPosts = async () => {

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log('response ==>', data);

    } catch (error) {
        console.log('SOME THING WENT WRONG')
    }

}

getPosts();