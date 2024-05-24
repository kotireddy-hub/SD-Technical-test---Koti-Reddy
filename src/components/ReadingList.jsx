import React from 'react';
import SinglePost from './SinglePost';
import { useAppContext } from '../context/AppContext';

function ReadingList() {
  const { loading, readList } = useAppContext();
  if (loading) {
    return null;
  }

  return (
    <div className="ui-wrapper">
      <h2>Reading list</h2>
      <pre>{JSON.stringify({ loading }, null)}</pre>
      {readList?.length === 0 && <p>No posts added</p>}
      {readList?.map((post) => (
        <SinglePost key={post.id} post={post} isReadingPost />
      ))}
    </div>
  );
}

export default ReadingList;
