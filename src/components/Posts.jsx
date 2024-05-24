import React from 'react';
import { useFetch } from '../hooks/useFetch';
import SinglePost from './SinglePost';
import { useAppContext } from '../context/AppContext';

function Posts() {
  const { loading, data: posts } = useAppContext();
  if (loading) {
    return 'Loading....';
  }

  return (
    <div className="ui-wrapper">
      <h2>List of Post</h2>
      {posts?.map((post) => (
        <SinglePost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
