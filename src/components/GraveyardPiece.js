import React from "react";
import PropTypes from "prop-types";

const GraveyardPiece = props => {
  let style = {};
  if (props && props.piece) style = props.piece.style;

  const handleClick = () => {
    if (!props.enabled) return;
    props.resurrectPiece(props.piece);
  };

  return (
    <div className="graveyard-piece" style={style} onClick={handleClick} />
  );
};
GraveyardPiece.propTypes = {
  piece: PropTypes.object,
  enabled: PropTypes.bool,
  resurrectPiece: PropTypes.func
};
export default GraveyardPiece;
