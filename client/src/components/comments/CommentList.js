// import React, { useState, useEffect } from "react";
// import axios from "axios";
import "./commentlist.css";

const CommentList = ({ comments }) => {
  // const [comments, setComments] = useState([]);

  // const fetchComments = async () => {
  //   const res = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );

  //   setComments(res.data);
  // };

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  if (!comments || comments.length === 0) {
    return <p className="no-comments">No comments yet.</p>;
  }
  return (
    <ul className="comment-list">
      {comments.map((comment) => (
        <li key={comment.id} className="comment-item">
          {comment.content}
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
