import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);  // state for like/unlike (boolean)   // Hook call, can only written inside component functions ("isLiked" : is state variable, "setIsLiked" : is setter function)
  let [clicks, setClicks] = useState(0); // state for tracking clicks (number)    // can create multiple state variables (inside component).

  let toggleLike = () => {
    setIsLiked(!isLiked); // toggle true/false (like ↔ unlike)
    setClicks(clicks + 1); // increase click count on every click
  };

  let likeStyle = { color: "red" };

  return (
    <div>
      <p>Clicks = {clicks}</p>
      <p onClick={toggleLike}>
        {/* // Conditional Rendering: UI changes based on isLiked */}
        {
          isLiked ? (
          <i className="fa-solid fa-heart" style={likeStyle}></i> // filled heart ❤️
        ) : (
        <i className="fa-regular fa-heart"></i> // empty heart 🤍
      )}
      </p>
    </div>
  )
}