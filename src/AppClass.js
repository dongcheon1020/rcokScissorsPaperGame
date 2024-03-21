import React, { Component } from "react";
import BoxClass from "./components/BoxClass";
import PlayButtonClass from "./components/PlayButtonClass";

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

export default class AppClass extends Component {
  // use

  //   componentDidMount() {
  //     if (this.state.game !== null) {
  //       this.play();
  //     }
  //   }
  //   componentDidUpdate() {
  //     if (this.state.game === null) {
  //       this.play();
  //     }
  //   }

  // state변수
  constructor(props) {
    super(props);
    this.state = {
      emogiH: "TIE",
      game: null,
      robotGame: "rock",
      gameResult: "TIE",
      score: 0,
      robotScore: 0,
    };
  }

  // 함수
  play = (name) => {
    this.setState({ game: name }, () => {
      console.log(this.state.game);
      let robotChoice = this.robotRandomChoice();
      const games = Object.values(images.game);
      this.setState({ robotGame: games[robotChoice] });
      let result = this.judgement(this.state.game, games[robotChoice]);
      this.setState({ gameResult: result });
    });
  };

  // 로봇 랜덤 결과 내기
  robotRandomChoice = () =>
    Math.floor(Math.random() * Object.keys(images.game).length);
  // 알고리즘
  judgement = (user, robot) => {
    if (user === robot) {
      return "TIE";
    } else if (user === "rock") {
      robot === "scissors"
        ? this.setState({ score: this.state.score + 1 })
        : this.setState({ robotScore: this.state.robotScore + 1 });
      return robot === "scissors" ? "WINNER" : "LOSER";
    } else if (user === "scissors") {
      robot === "paper"
        ? this.setState({ score: this.state.score + 1 })
        : this.setState({ robotScore: this.state.robotScore + 1 });
      return robot === "paper" ? "WINNER" : "LOSER";
    } else if (user === "paper") {
      robot === "rock"
        ? this.setState({ score: this.state.score + 1 })
        : this.setState({ robotScore: this.state.robotScore + 1 });
      return robot === "rock" ? "WINNER" : "LOSER";
    }
  };
  // 스테이트 변경 메서드
  setGame = (item) => {
    this.setState({ game: item });
  };

  render() {
    return (
      <div className="wrapper">
        <button
          className="reset"
          onClick={() => {
            this.setState({ robotScore: 0 });
            this.setState({ score: 0 });
          }}
        >
          reset
        </button>
        <section className="game-view">
          <BoxClass
            name="human"
            emogi={images.human}
            gameImg={images.game}
            game={this.state.game}
            gameResult={this.state.gameResult}
            score={this.state.score}
          />
          <h5 className="vs">VS</h5>
          <BoxClass
            name="robot"
            emogi={images.robot}
            gmaeImg={images.game}
            game={this.state.robotGame}
            gameResult={this.state.gameResult}
            score={this.state.robotScore}
          />
        </section>
        <section className="gmae-play-bts">
          <PlayButtonClass
            name="rock"
            setGame={this.setGame}
            play={this.play}
          />
          <PlayButtonClass
            name="scissors"
            setGame={this.setGame}
            play={this.play}
          />
          <PlayButtonClass
            name="paper"
            setGame={this.setGame}
            play={this.play}
          />
        </section>
      </div>
    );
  }
}
