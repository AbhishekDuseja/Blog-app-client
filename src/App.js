import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/home';
import CreatePost from './pages/CreatePost';
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
       <Router>
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home</Link>
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/createpost' exact Component={CreatePost}></Route>
          <Route path='/post/:id' exact Component={Post}></Route>
        </Routes>
       </Router>
    </div>
  );
}

export default App;
