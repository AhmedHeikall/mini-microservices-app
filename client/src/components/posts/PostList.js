import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentList from "../comments/CommentList";
import CommentCreate from "../comments/CommentCreate";
import "./postlist.css";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  const renderedPosts = Object.values(posts);
  return (
    <div className="post-list">
      <h2>All Posts</h2>
      {renderedPosts.length === 0 ? (
        <p className="no-posts">No posts yet. Create one above!</p>
      ) : (
        renderedPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>

            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
          </div>
        ))
      )}
    </div>
  );
};

export default PostList;
