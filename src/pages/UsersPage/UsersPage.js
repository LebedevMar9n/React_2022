import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import { User } from '../../components'
import { userService } from '../../services'

function UsersPage() {
  const [users, setUsers] = useState([])
  useEffect(() => {
  userService.getAll().then(({data})=>setUsers(data))
  }, [])
  
  return (
    <div style={{display:'flex'}}>
      <div>{users.map(user=><User key={user.id} user={user}/>)}</div>
      <div><Outlet/></div>
      
    </div>
  )
}

export {UsersPage}