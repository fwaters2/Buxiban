import React, { Component } from "react";
import "./Chatroom.css";
import Firebase from "../Utils/Firebase";

export default class Chatroom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Guest",
      newText: "",
      messages: [],
      newUser: ""
    };
  }
  componentDidMount() {
    const db = Firebase.firestore();
    var newMessages = [];
    db.collection("Messages")
      .orderBy("id", "desc")
      .onSnapshot(snapshot => {
        snapshot.forEach(doc => {
          newMessages.push({
            text: doc.data().text,
            user: doc.data().user,
            time: doc.data().id
          });
        });
        this.setState({ messages: newMessages });
        newMessages = [];
      });
  }
  handleChange = e => {
    this.setState({
      newText: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const db = Firebase.firestore();
    db.collection("Messages").add({
      id: Date(),
      text: this.state.newText,
      user: this.state.user
    });
    this.setState({
      newText: ""
    });
  };
  handleChangeUser = e => {
    this.setState({
      newUser: e.target.value
    });
  };
  handleNewUser = e => {
    e.preventDefault();
    this.setState({
      user: this.state.newUser,
      newUser: ""
    });
  };
  render() {
    return (
      <div className="Chatroom-Container">
        <div className="Chat-Header">
          <h3>Chat Room</h3>
        </div>
        <div className="ChatBox">
          {this.state.messages.map(message =>
            message.user === this.props.user ? (
              <div className="Message User">
                <div className="Message-Text">{message.text}</div>
                <div className="Message-User">{message.user}</div>
              </div>
            ) : (
              <div className="Message Other">
                <div className="Message-Text">{message.text}</div>
                <div className="Message-User">{message.user}</div>
              </div>
            )
          )}
        </div>
        <form onSubmit={this.handleSubmit} className="NewMessage-Container">
          <textarea value={this.state.newText} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Send</button>
        </form>
      </div>
    );
  }
}
