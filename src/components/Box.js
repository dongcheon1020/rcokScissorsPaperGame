import React from "react";

const Box = ({ emogi, gameImg, game, gameResult, name, score }) => {
  let result;
  if (name === "robot" && gameResult !== "TIE") {
    result = gameResult === "WINNER" ? "LOSER" : "WINNER";
  } else {
    result = gameResult;
  }
  return (
    <div className="box">
      <h3 className="score">{score}</h3>
      <img
        className={`emogi ${result === "WINNER" ? "wink" : ""} ${
          result === "LOSER" ? "losek" : ""
        }`}
        src={process.env.PUBLIC_URL + `/images/${emogi[result]}`}
        alt="Emogi"
      />
      <p
        className={`result ${result === "WINNER" ? "win" : ""} ${
          result === "LOSER" ? "lose" : ""
        }`}
      >
        {result}
      </p>

      <img
        className="game"
        src={process.env.PUBLIC_URL + `/images/${game ? game : "rock"}.png`}
        alt="gmaeImg"
      />
    </div>
  );
};

export default Box;
