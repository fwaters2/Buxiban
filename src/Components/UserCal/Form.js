import React, { Component } from "react";
import UserCal from "./UserCal";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aClass: "",
      Time: "14:00",
      Day: "Monday",
      Note: " ",
      classDB: [
        { Class: "D4X", Day: "Monday", Time: "14:00" },
        { Class: "LQ4", Day: "Wednesday", Time: "17:00", Note: "Trish will be absent today" }
      ]
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    var newClass={}
    this.state.Note===" "?
  (
  newClass={
    Class: this.state.aClass,
    Day: this.state.Day,
    Time: this.state.Time}):
    newClass={
        Class: this.state.aClass,
    Day: this.state.Day,
    Time: this.state.Time,
    Note: this.state.Note
    }
    console.log("Something in the note")
    console.log(this.state);
    console.log(newClass)
    this.setState({
        aClass: "",
        Time: "14:00",
        Day: "Monday",
        Note: "",
      classDB: [
        ...this.state.classDB,
       newClass
      ]
    });
  };
  render() {
    return (
      <div>
          <UserCal classDB={this.state.classDB} user={this.props.user}/>
        <h3>Add New Class</h3>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={this.handleSubmit}
        >
          <label>
            Class:
            
            
            <input
              id="aClass"
              value={this.state.aClass}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Day:
            <select id="Day" value={this.state.Day} onChange={this.handleChange}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
            </select>

          </label>
          <label>
            Time:
           
            <select  id="Time"
              value={this.state.Time}
              onChange={this.handleChange}>
                <option value="14:00">14:00</option>
                <option value="15:30">15:30</option>
                <option value="17:00">17:00</option>
                <option value="18:30">18:30</option>
            </select>
          </label>
          <label>
            Note:
            <input
              id="Note"
              value={this.state.Note}
              onChange={this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
