import React from 'react'

function UserInfo({user,setUserId}) {
  return (
    <div>
        <div>Name:{user.name}</div>
        <div>Email:{user.email}</div>
        <div>User name:{user.username}</div>
        <div>Phone:{user.phone}</div>
        <button onClick={()=>setUserId(user.id)}>posts</button>
    </div>
  )
}
export {UserInfo}
