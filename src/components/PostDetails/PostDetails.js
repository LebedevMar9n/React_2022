import React from 'react'
import { Link } from 'react-router-dom'

function PostDetails({post}) {
    const {id,userId,body,title}=post
  return (
    <div>
        <div>id:{id}</div>
        <div>userId:{userId}</div>
        <div>title:{title}</div>
        <div>body:{body}</div>
        <Link to={'comments'}>Get comments</Link>
    </div>
  )
}

export  {PostDetails}