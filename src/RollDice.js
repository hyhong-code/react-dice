import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
      isRolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const faces = ["one", "two", "three", "four", "five", "six"];
    const num1 = Math.floor(Math.random() * 6);
    const num2 = Math.floor(Math.random() * 6);
    this.setState({ die1: faces[num1], die2: faces[num2], isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    let button;

    if (this.state.isRolling) {
      button = (
        <button className="RollDice-button" disabled>
          Rolling...
        </button>
      );
    } else {
      button = (
        <button className="RollDice-button" onClick={this.roll}>
          Roll Dice!
        </button>
      );
    }

    return (
      <div className="RollDice">
        <div className="RollDice-dices">
          <Die face={this.state.die1} isRolling={this.state.isRolling} />
          <Die face={this.state.die2} isRolling={this.state.isRolling} />
        </div>
        {button}
      </div>
    );
  }
}

export default RollDice;
