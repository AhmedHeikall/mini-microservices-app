import "./commentlist.css";

const CommentList = ({ comments }) => {
  const renderdComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }

    if (comment.status === "pending...") {
      content = "This comment is pending...";
    }

    if (comment.status === "rejected") {
      content = "rejected comment";
    }

    return (
      <li key={comment.id} className="comment-item">
        {content}
      </li>
    );
  });

  if (!comments || comments.length === 0) {
    return <p className="no-comments">No comments yet.</p>;
  }

  return <ul className="comment-list">{renderdComments}</ul>;
};

export default CommentList;
