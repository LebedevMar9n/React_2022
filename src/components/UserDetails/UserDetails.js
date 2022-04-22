import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../Button/Button'

function UserDetails({user}) {
  const {id,name,email,username}=user
  return (
    <div>
        <div>id:{id}</div>
        <div>name:{name}</div>
        <div>username:{username}</div>
        <div>email:{email}</div>
        <hr/>
        {/* <Button to={'posts'}>Get Posts</Button> */}
        <Link to={'posts'}>Get posts</Link>
    </div>
  )
}

export {UserDetails}