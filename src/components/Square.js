import React from "react";
import PropTypes from "prop-types";
import "../css/Board.css";

const Square = ({ id, piece, shade, updateGame, disabled }) => {
  var style = null;
  if (piece) style = piece.style;

  const onDragStart = (e, squareId) => {
    if (disabled) return;
    e.dataTransfer.setData("fromId", squareId);
    e.currentTarget.style.opacity = "0.5";
  };

  const onDrop = e => {
    if (disabled) return;
    e.preventDefault();
    const from = parseInt(e.dataTransfer.getData("fromId"));
    updateGame(from, id);
  };

  const onDragOver = e => {
    e.preventDefault();
    if (disabled) return;
  };

  const onDragEnd = e => e.preventDefault();

  const onPieceDragEnd = e => {
    e.preventDefault();
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div
      className={`square ${shade}`}
      onDragOver={e => onDragOver(e)}
      onDrop={e => onDrop(e)}
      onDragEnd={e => onDragEnd(e)}
    >
      <div
        draggable={!disabled}
        onDragStart={e => onDragStart(e, id)}
        className="piece"
        style={style}
        onDragEnd={e => onPieceDragEnd(e)}
      ></div>
    </div>
  );
};
Square.propTypes = {
  id: PropTypes.number,
  piece: PropTypes.object,
  shade: PropTypes.string,
  updateGame: PropTypes.func,
  disabled: PropTypes.bool
};
export default Square;
