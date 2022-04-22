import { useState, useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { Post } from '../../components'
import { postService } from '../../services'


function PostsPage() {
  const { userId } = useParams()
  const [posts, setPosts] = useState([])
  useEffect(() => {
    if (userId) {
      postService.getByUserId(userId).then(({ data }) => setPosts(data))
    }
    else {
      postService.getAll().then(({ data }) => setPosts(data))

    }
  }, [userId])

  return (
    <div style={{ display: 'flex' }}>
      <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
      <div><Outlet /></div>

    </div>
  )
}

export { PostsPage }