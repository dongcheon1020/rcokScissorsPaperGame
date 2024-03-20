import React from "react";

const PlayButton = ({ name, play, setGame }) => {
  return (
    <button
      className="playbt"
      onClick={() => {
        setGame(name);
        play();
      }}
    >
      <img src={process.env.PUBLIC_URL + `/images/${name}.png`} alt="Emogi" />
    </button>
  );
};

export default PlayButton;
