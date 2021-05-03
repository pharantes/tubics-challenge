import React from "react";

const Square = ({ value, onClick }) => {
  const style = value ? `squares ${value}` : `squares`;
  return (
    <button className={style} onClick={onClick}>
      {!value ? null : value}
    </button>
  );
};

export default Square;
