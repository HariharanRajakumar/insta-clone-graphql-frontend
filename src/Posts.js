import React from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import { RoutePaths } from "./routes";
import request, { gql } from "graphql-request";
import { useQuery } from "react-query";
import { getCacheKeyForAllStories } from "./utils/cache";

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

  const { data } = useQuery(getCacheKeyForAllStories(), () =>
    request("http://localhost:8002/graphql", getAllStory)
  );
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
