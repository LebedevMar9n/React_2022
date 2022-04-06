import React from 'react'

export default function User({user}) {
  const {id,name,username,email}=user
  return (
    <div>
{id}--{name}--{username}--{email}
    </div>
  )
}
