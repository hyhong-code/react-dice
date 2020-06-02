import React, { Component } from "react";

class Die extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { face } = this.props;

    return <i className={`fas fa-dice-${face}`}></i>;
  }
}

export default Die;
