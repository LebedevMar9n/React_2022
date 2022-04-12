import { useEffect, useState } from 'react'

import { userService } from '../../services/user.service'
import { User } from '../User/User'

function Users({setUser,setUserId}) {
  const [users, setUsers] = useState([])
  // const [user, setUser] = useState(null)
  useEffect(() => {
    userService.getAll().then(({ data }) => setUsers(data))
  }, [])
  // const getUserId = async (id) => {
  //   const { data } = await userService.getById(id)
  //   setUser(data)
  // }
  return (
    <div>
      <div>
        {/* {users.map(user => <User key={user.id} user={user} getUserId={getUserId} setUser={setUser}/>)} */}
        {users.map(user => <User key={user.id} user={user}  setUser={setUser} setUserId={setUserId}/>)}
      </div>
    
        {/* {user && <div>{user.name}--{user.username}</div> } */}
      
    </div>
  )
}
export { Users }