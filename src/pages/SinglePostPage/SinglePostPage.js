import React, { useState, useEffect } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { PostDetails } from '../../components'
import { postService } from '../../services'

function SinglePostPage() {
    const {state}=useLocation()
    const {postId}=useParams()
    const [post, setPost] = useState(state)
    useEffect(() => {
        if(!state){
            postService.getById(postId).then(({data})=>setPost(data))
        }else{
            setPost(state)
        }
    
    }, [postId,state])
    
  return (
    <div>
        <div>
        {post && <PostDetails key={post.id} post={post}/>}
        </div>
       <Outlet/>
    </div>
  )
}

export {SinglePostPage}