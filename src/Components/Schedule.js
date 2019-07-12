import React, { Component } from "react";
import "./Schedule.css";
const week = ["Su", "M", "T", "W", "Th", "F", "Sa"];

export default class Schedule extends Component {
  render() {
    return (
      <div className="Schedule-Container">
        <div className="Container-Month">
          <button>Prev.</button>
          <div className="Title">July</div>
          <button>Next</button>
        </div>
        <div className="Container-Week">
          <button>{"<"}</button>
          {week.map(x => (
            <div className="Container-Day">
              <div className="Day">{x}</div>
              <div>{week.indexOf(x) + 1}</div>
            </div>
          ))}
          <button>{">"}</button>
        </div>
        <div className="Container-TimeSlots">
          
          {this.props.content}
          
        </div>
      </div>
    );
  }
}
