import React from 'react'

export default function User({ user }) {
  const { id, name, username, email } = user
  return (
    <div>
      <h3> Name:</h3>{name}
      <br />
      <h3>UserName:</h3> {username}
      <br />
      <h3>Email:</h3> {email}
    </div>
  )
}
