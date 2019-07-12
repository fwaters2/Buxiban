import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: "",
      changeUser: false
    };
  }
  handleChangeUser = e => {
    this.setState({
      newUser: e.target.value
    });
  };
  handleNewUser = e => {
    e.preventDefault();
    this.props.changeUser(this.state.newUser);
    alert("Welcome " + this.state.newUser);
    this.setState({
      newUser: ""
    });
  };
  handleLogout=e=>{
      this.props.changeUser("Guest")
      alert("Logged Out")
  }
  render() {
    return (
      <div className="App-Header">
        <div className="CurrentUser">
          Signed in as
          <br />
          <strong>{this.props.user}</strong>
        </div>
        <h3>App Header</h3>
        {this.props.user==="Guest" ? (
          <form className="NewUser" onSubmit={this.handleNewUser}>
          <input
            placeholder="New User"
            value={this.state.newUser}
            onChange={this.handleChangeUser}
          />
          <button onClick={this.handleNewUser}>Login</button>
        </form>
        ) : (
          <button onClick={this.handleLogout}>Logout</button>
        )}
      </div>
    );
  }
}
