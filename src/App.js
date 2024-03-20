import { useState, useEffect } from "react";
import "./App.css";
import Box from "./components/Box.js";
import PlayButton from "./components/PlayButton";

const images = {
  human: {
    WINNER: "emogiWinF.png",
    TIE: "emogiTieF.png",
    LOSER: "emogiLoseF.png",
  },
  robot: {
    WINNER: "emogiWinR.png",
    TIE: "emogiTieR.png",
    LOSER: "empgiLoseR.png",
  },
  game: {
    rock: "rock",
    scissors: "scissors",
    paper: "paper",
  },
};

function App() {
  // state변수
  const [emogiH, setEmogiH] = useState("TIE");
  const [game, setGame] = useState(null);
  const [robotGame, setRobotGame] = useState("rock");
  const [gameResult, setGameResult] = useState("TIE");
  const [score, setScore] = useState(0);
  const [robotScore, setRobotScore] = useState(0);

  // 함수
  const play = (name) => {
    let robotChoice = robotRandomChoice();
    const games = Object.values(images.game);
    setRobotGame(games[robotChoice]);
    let result = judgement(game, games[robotChoice]);
    setGameResult(result);
  };
  // 로봇 랜덤 결과 내기
  const robotRandomChoice = () =>
    Math.floor(Math.random() * Object.keys(images.game).length);
  // 알고리즘
  const judgement = (user, robot) => {
    if (user === robot) {
      return "TIE";
    } else if (user === "rock") {
      robot === "scissors"
        ? setScore(score + 1)
        : setRobotScore(robotScore + 1);
      return robot === "scissors" ? "WINNER" : "LOSER";
    } else if (user === "scissors") {
      robot === "paper" ? setScore(score + 1) : setRobotScore(robotScore + 1);
      return robot === "paper" ? "WINNER" : "LOSER";
    } else if (user === "paper") {
      robot === "rock" ? setScore(score + 1) : setRobotScore(robotScore + 1);
      return robot === "rock" ? "WINNER" : "LOSER";
    }
  };
  // use
  useEffect(() => {
    if (game !== null) {
      play();
    }
  }, [game]);
  return (
    <div className="wrapper">
      <button
        className="reset"
        onClick={() => {
          setRobotScore(0);
          setScore(0);
        }}
      >
        reset
      </button>
      <section className="game-view">
        <Box
          name="human"
          emogi={images.human}
          gameImg={images.game}
          game={game}
          gameResult={gameResult}
          score={score}
        />
        <h5 className="vs">VS</h5>
        <Box
          name="robot"
          emogi={images.robot}
          gmaeImg={images.game}
          game={robotGame}
          gameResult={gameResult}
          score={robotScore}
        />
      </section>
      <section className="gmae-play-bts">
        <PlayButton name="rock" setGame={setGame} play={play} />
        <PlayButton name="scissors" setGame={setGame} play={play} />
        <PlayButton name="paper" setGame={setGame} play={play} />
      </section>
    </div>
  );
}

export default App;
