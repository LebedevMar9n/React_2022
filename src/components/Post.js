import React from 'react'


export default function Post({post}) {
    const {userId,title,body}=post
  return (
    <div>
        <h3> userId:</h3>{userId}
        <br/>
        <h3>Title:</h3> {title}
        <br/>
        {body}
    </div>
  )
}
