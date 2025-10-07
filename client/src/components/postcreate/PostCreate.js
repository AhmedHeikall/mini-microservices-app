import React, { useState } from "react";
import axios from "axios";
import "./postcreate.css";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", { title });
    console.log("submittedTitle: ", title);
    setTitle("");
  };

  return (
    <div className="form-container">
      <form className="title-form" onSubmit={handleSubmit}>
        <h2>Add Post Title</h2>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
