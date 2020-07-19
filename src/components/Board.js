import React from "react";
import PropTypes from "prop-types";
import Square from "./Square";
import "../css/Board.css";
import { util } from "../helpers/util";
import { constants as c } from "../helpers/constants";

const Board = ({ pieces, updateGame, disabled }) => {
  const getColor = (i, x) =>
    (util.isEven(i) && util.isEven(x)) || (!util.isEven(i) && !util.isEven(x))
      ? c.squareColors.light
      : c.squareColors.dark;

  const renderBoard = () => {
    const board = [];
    for (let i = 0; i < 8; i++) {
      for (let x = 0; x < 8; x++) {
        const color = getColor(i, x);
        const id = i * 8 + x;
        board.push(
          <Square
            key={id}
            id={id}
            piece={pieces[id] && pieces[id].piece}
            shade={color}
            updateGame={updateGame}
            disabled={disabled}
          />
        );
      }
    }
    return board;
  };

  return <div className="nested">{renderBoard()}</div>;
};
Board.propTypes = {
  pieces: PropTypes.array,
  updateGame: PropTypes.func,
  disabled: PropTypes.bool
};
export default Board;
