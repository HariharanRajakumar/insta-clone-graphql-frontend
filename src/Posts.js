import React from 'react';
import { gql, useQuery } from '@apollo/client';
import Post from './Post';

function Posts() {
  const getAllStory = gql`
    {
      story {
        username
        caption
        imageUrl
        avatarUrl
      }
    }
  `;

  const { data } = useQuery(getAllStory);
  return (
    <div>
      {data?.story.map((story) => (
        <Post
          username={story.username}
          caption={story.caption}
          imageUrl={story.imageUrl}
          avatarUrl={story.avatarUrl}
        />
      ))}
    </div>
  );
}

export default Posts;
