import React from "react";
import Dice from "./Dice";
import { nanoid } from "nanoid";
import WonTheGame from "./WonTheGame";
import Confetti from "react-confetti";

const Tenzi = () => {
  const generateNewDie = () => {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      id: nanoid(),
      isHeld: false,
    };
  };

  const allNewDice = () => {
    const newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  };

  const [dice, setDice] = React.useState(allNewDice());
  const [isWon, setIsWon] = React.useState(false);

  const cardStyle = {
    width: "500px",
  };

  const roolDice = () => {
    if (!isWon) {
      setDice((preDice) => {
        return preDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        });
      });
    } else {
      setIsWon(false);
      setDice(allNewDice());
    }
  };

  const setIsHeld = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  React.useEffect(() => {
    if (dice.every((die) => die.isHeld && die.value === dice[0].value)) {
      setIsWon(true);
      console.log("You won the Game");
    }
  }, [dice]);

  const allDice = dice.map((dice) => (
    <Dice
      value={dice.value}
      key={dice.id}
      isHeld={dice.isHeld}
      setIsHeld={() => setIsHeld(dice.id)}
    />
  ));

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h3 className="card-title">Tenzi Game</h3>
          <hr />
          {!isWon && (
            <p className="card-text">
              Roll until all dice are the same. Click each die to freeze it at
              its current value between rolls.
            </p>
          )}
          {isWon && (
            <>
              <WonTheGame /> <Confetti />
            </>
          )}
          {!isWon && allDice}
          <button className="btn btn-primary roll--button" onClick={roolDice}>
            {isWon ? "Play again" : "Roll"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tenzi;
