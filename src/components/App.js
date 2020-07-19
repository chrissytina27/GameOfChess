import React from "react";
import Welcome from "./Welcome";

const App = props => {
  const playGame = (player1, player2) => {
    props.history.push({
      pathname: "/game",
      state: { player1, player2 }
    });
  };

  return <Welcome playGame={playGame} />;
};

export default App;
