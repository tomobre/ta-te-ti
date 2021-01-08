import React from "react";

const Board = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="Square">
      {value}
    </button>
  );
};

export default Board;
