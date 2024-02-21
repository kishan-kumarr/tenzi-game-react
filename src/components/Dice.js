import React from "react";

const Dice = (props) => {
  return (
    <>
      <button
        type="button"
        className={
          props.isHeld
            ? "btn btn-success dice--button"
            : "btn btn-default dice--button"
        }
        onClick={props.setIsHeld}
      >
        {props.value}
      </button>
    </>
  );
};

export default Dice;
