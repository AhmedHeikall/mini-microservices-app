import React, { useState } from "react";
import axios from "axios";
import "./commentcreate.css";

const CommentCreate = ({ postId }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: comment,
    });

    console.log(`Comment added to post ${postId}:`, comment);

    // Reset input
    setComment("");
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default CommentCreate;
