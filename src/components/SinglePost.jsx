import React from 'react';
import { useAppContext } from '../context/AppContext';

const SinglePost = React.memo(({ post, isReadingPost }) => {
  const {
    yoast_head_json: { title, description },
    id,
  } = post;
  const { addToReadList, removeFromReadList } = useAppContext();
  return (
    <div className="ui-post">
      <h3>{title}</h3>
      <p>{description}</p>
      <nav>
        <button>Comment</button>
        <button
          onClick={() => {
            if (isReadingPost) {
              removeFromReadList(id);
            } else {
              addToReadList(post);
            }
          }}
        >
          {isReadingPost ? 'Remove from List' : 'Add to List'}
        </button>
      </nav>
    </div>
  );
});

export default SinglePost;
