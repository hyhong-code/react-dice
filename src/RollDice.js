import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: "one",
      die2: "one",
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const faces = ["one", "two", "three", "four", "five", "six"];
    const num1 = Math.floor(Math.random() * 6);
    const num2 = Math.floor(Math.random() * 6);
    this.setState({ die1: faces[num1], die2: faces[num2] });
  }

  render() {
    return (
      <div>
        <Die face={this.state.die1} />
        <Die face={this.state.die2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    );
  }
}

export default RollDice;
