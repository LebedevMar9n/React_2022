import { useEffect, useState } from 'react';
import Comment from './Comment.js';
import { CommentsService } from '../Services/commentsServ.js';

export default function Comments() {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    CommentsService.getAllComments().then(value => setComments(value))
  }, [])

  return (
    <div>
      {
      comments && comments.map(comment => <Comment key={comment.id} comment={comment} />)
      }
    </div>
  );
};
