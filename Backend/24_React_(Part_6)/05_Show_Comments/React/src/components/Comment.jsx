import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@pk",
      remarks: "great Job!",
      rating: 4,
    },
  ]);

  // taking comment from 'CommentsForm' and add it as newComment in comment list
  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    // console.log("added new comment")
  };

  return (
    <div>
      <h3>All Comments</h3>
      {comments.map((comment, idx) => (
        <div className="Comment" key={idx}>
          <span>{comment.remarks}</span> &nbsp;
          <span>(rating = {comment.rating})</span>
          <p> - {comment.username}</p>
        </div>
      ))}
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </div>
  );
}
