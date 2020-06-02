import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { face } = this.props;
    return (
      <div className="Die">
        <i className={`fas fa-dice-${face}`}></i>
      </div>
    );
  }
}

export default Die;
