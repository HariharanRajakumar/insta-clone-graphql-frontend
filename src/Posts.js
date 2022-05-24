import React from "react";
import { gql, useQuery } from "@apollo/client";
import Post from "./Post";
import { Link } from "react-router-dom";
import { RoutePaths } from "./routes";

function Posts() {
  const getAllStory = gql`
    {
      story {
        username
        caption
        imageUrl
        avatarUrl
        _id
      }
    }
  `;

  const { data } = useQuery(getAllStory);
  return (
    <>
      {data?.story.map((story) => (
        <Link to={RoutePaths.likesPageById.replace(":postId", story._id)}>
          <Post
            username={story.username}
            caption={story.caption}
            imageUrl={story.imageUrl}
            avatarUrl={story.avatarUrl}
          />
        </Link>
      ))}
    </>
  );
}

export default Posts;
