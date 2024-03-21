import React, { Component } from "react";

export default class PlayButtonClass extends Component {
  render() {
    return (
      <button
        className="playbt"
        onClick={() => {
          console.log(this.props.name);
          this.props.play(this.props.name);
        }}
      >
        <img
          src={process.env.PUBLIC_URL + `/images/${this.props.name}.png`}
          alt="Emogi"
        />
      </button>
    );
  }
}
