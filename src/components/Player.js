import React from "react";
import PropTypes from "prop-types";
import GraveyardPiece from "./GraveyardPiece";

const Player = props => {
  const renderGraveyard = graveyard => {
    if (!graveyard || !graveyard.length) return;
    return graveyard.map((piece, index) => {
      return (
        <div key={index} className="graveyard">
          <GraveyardPiece
            piece={piece}
            enabled={props.graveyardPick}
            resurrectPiece={props.resurrectPiece}
          />
        </div>
      );
    });
  };

  return <div>{renderGraveyard(props.graveyard)}</div>;
};
Player.propTypes = {
  name: PropTypes.string,
  graveyard: PropTypes.array,
  graveyardPick: PropTypes.bool,
  resurrectPiece: PropTypes.func
};
export default Player;
