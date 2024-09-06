import React from "react";

const WonTheGame = ({counter}) => {
  return (
    <>
      <div className="alert alert-primary" role="alert">
        !!! Hip Hip Hurrey !!!
        <br />
        <b>Congratulations</b> you won the Game in just <b>{counter}</b> seconds.
      </div>
    </>
  );
};

export default WonTheGame;
