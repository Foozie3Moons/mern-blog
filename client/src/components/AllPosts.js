import React from 'react';
import Post from './Post';

const AllPosts = props => {
  console.log(props.posts)
  const posts = props.posts.map((post, index) => (
    <Post
      deletePost={props.deletePost}
      post={post}
      key={index}
      id={index}
    />
  ));
  return(
    <div>
      {posts}
    </div>
  )
}

export default AllPosts
