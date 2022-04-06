import './App.css'
import Users from "./components/Users.js";
import Posts from './components/Posts.js';
import Comments from './components/Comments.js';

function App() {
  return (
    <div>
      <div className={'container'}>
        <Users />
        <Posts />
      </div>
      <Comments />
    </div>
  );
}

export default App; 