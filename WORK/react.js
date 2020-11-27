// App .js 

/*


// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/users"><li>Users</li></Link>

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="users/*" element={<Users />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

const NotFound = () => <h1>Sorry the page you are looking for not found !!!</h1>;
const Home = () => <div>This is Home page 1</div>
const About = () => <div>This is About page 1</div>
const Users = () => {
  return (
    <div>
      <ul>
        <li><Link to=''> User Index</Link></li>
        <Link to='/users/1'></Link>
      </ul>
      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UsersProfile />} />
      </Routes>

    </div>
  );
}

const users = [
  { id: 1, name: 'osama', age: 30 },
  { id: 2, name: 'farhan', age: 20 },
  { id: 3, name: 'umair', age: 33 },
]



const UsersIndex = () => {
  return (
    <div>
      {
        users.map(user => {
          return <div key={user.id} className="users">
            <p>User ID : {user.id}</p>
            <p>User name is : {user.name}</p>
            <p>User age is : {user.age}</p>
            <Link to={`/users/${user.id}`}><button>Vist Profile</button></Link>
          </div>
        })
      }

    </div>
  )
}


const UsersProfile = () => {

  const { id } = useParams();

  const currentUser = users.find(user => user.id === Number(id));

  console.log(currentUser);

  return (
    <>
      <div className="users">
  <p>User ID: {currentUser.id}</p>
  <p>User name is : {currentUser.name}</p>
  <p>User age is </p>
  <Link to={`/users/${currentUser.id}`}>
      <button>Visit Profile</button>
      </Link>
      </div>
    </>
  )

}



export default App;




/* OLD CODE


function App() {
  return (

    <div >
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contect">Contect</Link></li>
          <li><Link to="/users">Users</Link></li>

        </ul>


        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contect" element={<Contect />} />
          <Route path="users/*" element={<Users />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}
const Home = () => <div>This is Home page 1</div>
const About = () => <div>This is About page 2</div>
const Contect = () => <div>This is Contect page 3</div>
const Users = () => {
  return (
    <div>
      <ul>
        <li><Link to=''> User Index</Link></li>
        <li><Link to='/users/1'>User Profile</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UsersProfile />} />
      </Routes>
    </div>
  );
}

const usersData = {
    1: {
        name: 'farhan',
        age: 20
    },
    2: {
        name: 'waseer',
        age: 15
    }
}


const UsersIndex = () => <div>This is UserIndex</div>;

const UsersProfile = () => {

  const { id } = useParams();

  const currentUserData = usersData[id];

  console.log(currentUserData);

  if(!currentUserData) {
    return <div>User Not found</div>
  }

  return (
    <>
      <h2>This is User Profile component </h2>
      <h4>The username is : {currentUserData.name}</h4>
      <h4>The user age is : {currentUserData.age}</h4>
    </>
   );
}


/*

OLD CODE


function App() {
  return (

    <div >
      <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contect">Contect</Link></li>
          <li><Link to="/users">Users</Link></li>

        </ul>


        <Routes>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contect" element={<Contect />} />
          <Route path="users/*" element={<Users />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}
const Home = () => <div>This is Home page 1</div>
const About = () => <div>This is About page 2</div>
const Contect = () => <div>This is Contect page 3</div>
const Users = () => {
  return (
    <div>
      <ul>
        <li><Link to=''> User Index</Link></li>
        <li><Link to='/users/1'>User Profile</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<UsersIndex />} />
        <Route path=":id" element={<UsersProfile />} />
      </Routes>
    </div>
  );
}

const UsersIndex = () => <div>This is UserIndex</div>;
const usersData = {
  1: {
    name: 'farhan',
    age: 20
  },
  2: {
    name: 'waseer',
    age: 15
  }
}



const UsersProfile = () => {

  const { id } = useParams();

  const currentUserData = usersData[id];

  console.log(currentUserData);

  if(!currentUserData) {
    return <div>User Not found</div>
  }

  return (
    <>
      <h2>This is User Profile component </h2>
      <h4>The username is : {currentUserData.name}</h4>
      <h4>The user age is : {currentUserData.age}</h4>
    </>
   );
}

*/

//// GET API DATA
//1
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [posts, setPosts] = useState([]);

  console.log(posts);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setPosts(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div >
      <h1>farhan waseer</h1>
      <ul>
        {

          posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          )
          )
        }
      </ul>

    </div>
  );

}


export default App;

//2
function App() {

const [post, setPost] = useState([]);
const [id, setId] = useState(1);
const [postId, setPostId] = useState(1);


// console.log(postid);

useEffect(() => {
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then((res) => setPost(res.data))
  .catch((e) => console.log(e));
}, [postId]);

const handleSetId = () => {
  setPostId(id);
}

  return (
    <div >
      <h1>farhan waseer</h1>
      <input type='number' value={id} onChange={e => setId(e.target.value)} />
      <button type="button" onClick={handleSetId}>Fetch Data</button>
      <ul>
        {/*
        {
          posts.map((post) => (
          <li key={post.id}>{post.title}</li>
          ))
        }
        */}
        <li> {post.title}</li>
      </ul>

    </div>
  );

}


export default App;






