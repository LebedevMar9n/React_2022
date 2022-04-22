import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Comments } from '../../components'
import { commentsService } from '../../services'

function CommentsPage() {
  const { postId } = useParams()
  const [comments, setComments] = useState([])
  useEffect(() => {
    commentsService.getByPostId(postId).then(({ data }) => setComments(data))
  }, [postId])

  return (
    <div>
      <div>     
           {comments.map(comments=> <Comments key={comments.id} comments={comments} /> )}
      </div>
        <Outlet />
    </div>
  )
}

export { CommentsPage }