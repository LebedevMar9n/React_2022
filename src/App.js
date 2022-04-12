import {useState} from 'react'

import { Posts, UserInfo, Users } from "./components";
import './App.css'


function App() {
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)
  return (
    <div>
      <div className="users_info">
        <Users setUser={setUser} setUserId={setUserId}  />
        {user && <UserInfo user={user} setUserId={setUserId}/>}
      </div>
      {userId && <Posts userId={userId}/>}
    </div>
  );
}

export default App; 