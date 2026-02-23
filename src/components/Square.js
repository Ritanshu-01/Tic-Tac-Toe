import React from "react";

function Square({ value, onClick, highlight }) {
  let className = "square";
  if (value === "X") className += " x";
  if (value === "O") className += " o";
  if (highlight) className += " highlight";

  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
