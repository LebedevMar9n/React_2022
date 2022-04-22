import React from 'react'
import { Link } from 'react-router-dom'

function User({user}) {
    const {id,name}=user
    return (
      <div>
  {id}--{name} <Link to={`${id}`} state={user}>Get Details</Link>
      </div>
    )
}

export {User}