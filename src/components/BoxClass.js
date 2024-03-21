import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor(props) {
    super(props);
    this.result = "";
  }
  getResult = () => {
    if (this.props.name === "robot" && this.props.gameResult !== "TIE") {
      this.result = this.props.gameResult === "WINNER" ? "LOSER" : "WINNER";
    } else {
      this.result = this.props.gameResult;
    }
  };

  render() {
    this.getResult();
    return (
      <div className="box">
        <h3 className="score">{this.props.score}</h3>
        <img
          className={`emogi ${this.result === "WINNER" ? "wink" : ""} ${
            this.result === "LOSER" ? "losek" : ""
          }`}
          src={
            process.env.PUBLIC_URL + `/images/${this.props.emogi[this.result]}`
          }
          alt="Emogi"
        />
        <p
          className={`result ${this.result === "WINNER" ? "win" : ""} ${
            this.result === "LOSER" ? "lose" : ""
          }`}
        >
          {this.result}
        </p>

        <img
          className="game"
          src={
            process.env.PUBLIC_URL +
            `/images/${this.props.game ? this.props.game : "rock"}.png`
          }
          alt="gmaeImg"
        />
      </div>
    );
  }
}
