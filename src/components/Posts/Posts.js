import {useState,useEffect}from 'react'

import {postService} from '../../services/posts.service'
import {Post} from '../Post/Post'


function Posts({userId}) {
    const [posts, setPosts] = useState(null)
    useEffect(() => {
      postService.getByUserId(userId).then(({data})=>setPosts(data))
      }
    , [])
    
  return (
    <div>
        {posts && posts.map((post)=><Post post={post}/>)}
    </div>
  )
}
export {Posts}