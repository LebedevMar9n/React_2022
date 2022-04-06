import { useEffect, useState } from 'react';
import Post from './Post';
import { PostsService } from '../Services/postsServ.js';

export default function Posts() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    PostsService.getAllPosts().then(value => setPosts(value))
  }, [])

  return (
    <div>
      {
      posts && posts.map(post => <Post key={post.id} post={post} />)
      }
    </div>
  );
};
