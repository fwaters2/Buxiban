import React, { Component } from "react";
import Home from "./Home";

export default class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
      outline: false
    };
  }
  changeUser = user => {
    this.setState({
      user: user
    });
  };
  toggleOutline = e => {
      this.setState({
          outline: !this.state.outline
      })
  }
  render() {
    return (
      <Home
        outline={this.state.outline}
        toggleOutline={this.toggleOutline}
        user={this.state.user}
        changeUser={this.changeUser}
      />
    );
  }
}
