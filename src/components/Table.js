import React from "react";
import PropTypes from "prop-types";
import { util } from "../helpers/util";

const Table = ({ players }) => {
  const renderTable = () => {
    const whiteMoves = players[1].moves,
      blackMoves = players[0].moves;
    const table = whiteMoves.map((move, index) => {
      const whiteMove = whiteMoves[index] && whiteMoves[index].to;
      const blackMove = blackMoves[index] && blackMoves[index].to;
      return (
        <tr key={index}>
          <td>{whiteMove && util.squareName(whiteMove)}</td>
          <td>{blackMove && util.squareName(blackMove)}</td>
        </tr>
      );
    });
    return <tbody>{table}</tbody>;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>White</th>
          <th>Black</th>
        </tr>
      </thead>
      {renderTable()}
    </table>
  );
};
Table.propTypes = {
  players: PropTypes.array
};
export default Table;
