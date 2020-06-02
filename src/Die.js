import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { face, isRolling } = this.props;

    let classes;

    if (isRolling) {
      classes = "Die shake";
    } else {
      classes = "Die";
    }
    return (
      <div className={classes}>
        <i className={`fas fa-dice-${face}`}></i>
      </div>
    );
  }
}

export default Die;
