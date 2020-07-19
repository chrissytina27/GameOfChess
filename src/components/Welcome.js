import React from "react";
import PropTypes from "prop-types";
import "../css/welcome.css";

const Welcome = props => {
  const p1Ref = React.createRef();
  const p2Ref = React.createRef();

  const submitNames = e => {
    e.preventDefault();
    if (!(p1Ref.current.value && p2Ref.current.value)) {
      alert("Please enter valid player names");
      return;
    }
    props.playGame(p1Ref.current.value, p2Ref.current.value);
  };

  return (
    <div className="welcome" data-testid="welcome">
      <header className="title">
        <h1>The Game of Chess</h1>
      </header>
      <div className="container">
        <form name="playerNames" onSubmit={submitNames}>
          <label htmlFor="player1">Player 1: </label>
          <input
            type="text"
            id="player1"
            name="player1"
            placeholder="Player 1's Name"
            ref={p1Ref}
          ></input>
          <label htmlFor="player2">Player 2: </label>
          <input
            type="text"
            name="player2"
            id="player2"
            placeholder="Player 2's Name"
            ref={p2Ref}
          ></input>
          <br />
          <button data-testid="startBtn" className="btn" type="submit">
            Start
          </button>
        </form>
      </div>
    </div>
  );
};
Welcome.propTypes = {
  playGame: PropTypes.func
};
export default Welcome;
