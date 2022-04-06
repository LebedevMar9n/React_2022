import React from 'react'

export default function Comment({comment}) {
    const {postId,name,email,body}=comment
  return (
    <div>
        <h3>PostID:</h3>{postId}
        <br/>
        <h3>Name:</h3>{name}
        <br/>
        <h3>Email:</h3>{email}
        <br/>
        <h3>Comment:</h3>{body}
    </div>
  )
}
