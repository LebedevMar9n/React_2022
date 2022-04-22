import React from 'react'
import { Link } from 'react-router-dom'

function Post({ post, flag }) {
  const { id, title } = post
  return (
    <div>
      {id}--{title}
      {
        flag && <Link to={`${id}`} state={post}>Get Details</Link>
      }
    </div>
  )
}

export { Post }